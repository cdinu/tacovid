import React from 'react';
import Img from 'react-image';
import { Flipper, Flipped } from 'react-flip-toolkit'

import { StaticQuery, graphql, Link, withPrefix } from 'gatsby';
import styles from './list.module.scss';
import icon from '../../images/icons/hs-url.svg';

import SmartLink from '../smart-link';
import { Product } from "../../createPages"
import slugify from "slugify"

type SortBy = 'Default' | 'Added' | 'Name';
type Segment = 'Work' | 'Edu' | 'News' | 'Covid-19';
type Type = 'recommended';

export interface ProductListProps {
  nodes: [{ data: Product }];
  segment?: Segment;
  type?: Type;
  category?: string;
}

// component dumb
export const ProductList: React.FC<ProductListProps> = ({ nodes, segment, type,category }) => {
  let products = nodes.filter(({ data }) => data.Added)

  const [search, setSearch] = React.useState('');
  const [sortBy, setSortBy] = React.useState<SortBy>('Default');

  if (segment) {
    products = products.filter(
      ({ data }) => data.Tags && data.Tags?.indexOf(segment) > -1
    )
  }

  if (type) {
    products = products.filter(({ data }) => data.Gold)
  }

  if(search) {
    search.toLowerCase().split(/\s+/).forEach(s => {
      products = products.filter(({ data }) =>
        (data.Product || '').toLowerCase().indexOf(s) > -1 ||
        (data.Details || '').toLowerCase().indexOf(s) > -1 ||
        (data.Website || '').toLowerCase().indexOf(s) > -1 ||
        (data.Software_category || '').toLowerCase().indexOf(s) > -1 ||
        (data.Twitter || '').toLowerCase().indexOf(s) > -1 ||
        (data.Tags ||[]).join(' ').toLowerCase().indexOf(s) > -1
      );
    });
  }

  switch (sortBy) {
    case 'Name':
      products.sort(({data: a}, { data: b}) => {
        return (a.Product.toLowerCase() < b.Product.toLowerCase()) ? -1 : 1;
      });
      break;
    case 'Added':
      products.sort(({data: a}, { data: b}) => {
        if (!a.Added) return 1;
        if (!b.Added) return -1;

        if (a.Added < b.Added) return 1;
        if (a.Added > b.Added) return -1;
        // sort by name
        return (a.Product.toLowerCase() < b.Product.toLowerCase()) ? -1 : 1;
      });
      break;
    default:
      // leave as is
      break;
  }

  const nrProducts = products.length

  const twitterIcon = (twitterHandler: string | undefined) =>
    twitterHandler ? (
      <a
        href={`https://twitter.com/${twitterHandler}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          src={withPrefix('/images/twitter.svg')}
          className={styles.icon}
          alt='twitter'
        />
      </a>
    ) : null

  const star = (gold: boolean | undefined) =>
    gold ? (
      <img
        src={withPrefix('/images/star.svg')}
        className={styles.icon}
        alt='star'
      />
    ) : null

  const favicon = (url: string, product: string) => (
    <Img
      src={[
        `https://api.faviconkit.com/${
          url.split('/')[url.startsWith('http') ? 2 : 0]
        }/144`,
        withPrefix('/images/globe.svg'),
      ]}
      className={styles.favicon}
      alt={` logo for ${product}`}
    />
  )

  const getSearchBox = () => {
    const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value)
    }

    return (
      <input
        name='search'
        value={search}
        onChange={onChange}
        type='search'
        placeholder='Search this category...'
      />
    )
  }

  const getSortBy = () => {
    const onChange = (event:any) => {
      setSortBy(event.target.value)
    }

    return (
      <select
        name='sortBy'
        className={styles.selectBox}
        onChange={onChange}
        onBlur={onChange}
      >
        <option value='Default'>Sort by...</option>
        <option value='Default'>Default</option>
        <option value='Name'>Name</option>
        <option value='Added'>Date added</option>
      </select>
    )
  }

  const arrowButton = (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className="feather feather-arrow-left-circle"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 8L8 12 12 16"></path>
    <path d="M16 12L8 12"></path>
  </svg>
  );

  const segments = !category ? (
    <>
      <Link to='/' className={styles.linkItem} activeClassName={styles.active}>
        Recommended {type === 'recommended' && `(${nrProducts})`}
      </Link>
      <Link to='/work' className={styles.linkItem} activeClassName={styles.active}>
          Work {segment === 'Work' && `(${nrProducts})`}
      </Link>
      <Link to='/edu' className={styles.linkItem} activeClassName={styles.active}>
      Edu {segment === 'Edu' && `(${nrProducts})`}
      </Link>
      <Link to='/covid-19' className={styles.linkItem} activeClassName={styles.active}>
      Covid-19 {segment === 'Covid-19' && `(${nrProducts})`}
      </Link>
      <Link to='/all' className={styles.linkItem} activeClassName={styles.active}>
      All{' '}
      {segment === null && type !== 'recommended' && `(${nrProducts})`}
      </Link>
    </>
    ): (
      <>
        <button onClick={() => window.history.back()} className={styles.backButton}>{arrowButton}</button>
        <div className={styles.categoryTitle}>{category}</div>
      </>
    );

  return (
    <Flipper
      flipKey={products.map(p => p.data.Product).join('')}
      staggerConfig={{
        default: {
          reverse: true,
          speed: 1,
        }
      }}
    >
      <div className={styles.headerContainer}>
        <div className={styles.header}>
          {segments}
          <div className={styles.space} />
          <div className={styles.searchBox}>
            {getSearchBox()}
          </div>
          <div className={styles.searchBox}>
            {getSortBy()}
          </div>
        </div>
      </div>
      <div>
        {products.map(({ data: item }) => (
          <Flipped key={item.Product} flipId={item.Product}>
            <SmartLink
              href={item.Website}
              className={styles.item}
              label={item.Product}
            >
              <div className={styles.productName} title={item.Details}>
                {favicon(item.Website, item.Product)}
                <div className={styles.name}>{item.Product}</div>
              </div>
              <div className={styles.details} title={item.Details}>{item.Details}</div>
              <div className={styles.rightSide}>
                {star(item.Gold)}
                {twitterIcon(item.Twitter)}
                {!category && item.Software_category && (
                  <Link
                    className={styles.category}
                    to={`/c/${slugify(item.Software_category.toLowerCase())}`}
                  >{item.Software_category}</Link>
                )}
                <img src={icon} className={styles.icon} alt='click to open' />
              </div>
            </SmartLink>
          </Flipped>
        ))}
      </div>
    </Flipper>
  )
}

const query = graphql`
  query MyQuery {
    allAirtable(
      sort: { fields: [data___Gold, data___Added, data___Product], order: ASC }
    ) {
      nodes {
        data {
          Product
          Added
          Countries
          Details
          Software_category
          Website
          Twitter
          Tags
          Gold
        }
      }
    }
  }
`

// container
export default ({ segment, type }: { segment: Segment, type: Type}) => (
  <StaticQuery
    query={query}
    render={data => (
      <ProductList
        nodes={data.allAirtable.nodes}
        segment={segment}
        type={type}
      />
    )}
  />
)
