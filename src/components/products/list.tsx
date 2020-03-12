import React from "react"
import Img from "react-image"

import { StaticQuery, graphql, Link, withPrefix } from "gatsby"
import styles from "./list.module.scss"
import icon from "../../images/icons/hs-url.svg"

import SmartLink from '../smart-link';

export interface ProductListProps {
  nodes: any
  segment: "Work" | "Edu" | "News" | "Covid-19" | undefined
  type: "recommended" | undefined
}

// component dumb
const ProductList: React.FC<ProductListProps> = ({ nodes, segment, type }) => {
  let products = nodes.filter(({ data }) => data.Added)

  const [search, setSearch] = React.useState('');

  if (segment) {
    products = products.filter(
      ({ data }) => (data.Tags || []).indexOf(segment) > -1
    )
  }

  if (type) {
    products = products.filter(({ data }) => data.Gold)
  }

  if(search) {
    search.toLowerCase().split(/\s/).forEach(s => {
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
  const nrProducts = products.length

  const twitterIcon = (twitterHandler: string | undefined) =>
    twitterHandler ? (
      <a
        href={`https://twitter.com/${twitterHandler}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={withPrefix("/images/twitter.svg")}
          className={styles.icon}
          alt="twitter"
        />
      </a>
    ) : null

  const star = (gold: string | undefined) =>
    gold ? (
      <img
        src={withPrefix("/images/star.svg")}
        className={styles.icon}
        alt="star"
      />
    ) : null

  const favicon = (url: string, product: string) => (
    <Img
      src={[
        `https://api.faviconkit.com/${
          url.split("/")[url.startsWith("http") ? 2 : 0]
        }/144`,
        withPrefix("/images/globe.svg"),
      ]}
      className={styles.favicon}
      alt={` logo for ${product}`}
    />
  )

  const tweetThis =  () => (
    <a
      href="https://twitter.com/intent/tweet?url=https%3A%2F%2Ftechagainstcoronavirus.com&text=Awesome%20list%20for%20working%20remotely&hashtags=techagainstcoronavirus%2Cremotely%2Cworkremotely%2Clearnremotely"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.tweetaboutthis}
    >
      <img
        src={withPrefix("/images/twitter-logo.png")}
        alt="tweet this"
      />
      <span>Tweet about this</span>
    </a>
  )

  const getSearchBox = () => {
    const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value)
    }

    return (
      <input
        name="search"
        value={search}
        onChange={onChange}
        type="search"
        placeholder="Search this category"
      />
    )
  }

  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.header}>
          <Link to="/" className={styles.linkItem} activeClassName={styles.active}>
            Recommended {type === "recommended" && `(${nrProducts})`}
          </Link>
          <Link to="/work" className={styles.linkItem} activeClassName={styles.active}>
            Work {segment === "Work" && `(${nrProducts})`}
          </Link>
          <Link to="/edu" className={styles.linkItem} activeClassName={styles.active}>
            Edu {segment === "Edu" && `(${nrProducts})`}
          </Link>
          <Link to="/covid-19" className={styles.linkItem} activeClassName={styles.active}>
            Covid-19 {segment === "Covid-19" && `(${nrProducts})`}
          </Link>
          <Link to="/all" className={styles.linkItem} activeClassName={styles.active}>
            All{" "}
            {segment === null && type !== "recommended" && `(${nrProducts})`}
          </Link>
          <div className={styles.searchBox}>
            {getSearchBox()}
          </div>
          <div className={styles.space} />
          <div>{tweetThis()}</div>
        </div>
      </div>
      {products.map(({ data: item }, key) => (
        <SmartLink
          href={item.Website}
          className={styles.item}
          key={key}
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
            <span className={styles.category}>{item.Software_category}</span>
            <img src={icon} className={styles.icon} alt="click to open" />
          </div>
        </SmartLink>
      ))}
    </>
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
export default ({ segment, type }) => (
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
