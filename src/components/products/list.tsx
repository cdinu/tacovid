import React from "react";
import { StaticQuery, graphql, Link, withPrefix } from "gatsby";
import styles from './list.module.scss';
import icon from '../../images/icons/hs-url.svg';
import Img from 'react-image';

export interface ProductListProps {
  nodes: any;
  segment: 'Work' | 'Edu' | 'News' | 'Covid-19' | undefined;
  type: 'recommended' | undefined;
}

// component dumb
const ProductList:React.FC<ProductListProps> = ({ nodes, segment, type }) => {
  let products = nodes.filter(({data}) => data.Added);

  if (segment) {
    products = products.filter( ({data})  => (data.Tags || []).indexOf(segment) > -1);
  }

  if (type) {
    products = products.filter( ({data})  => data.Gold);
  }

  const nrProducts = products.length;

  const twitter = (twitterHandler: string | undefined) =>
    twitterHandler
      ? <a
          href={`https://twitter.com/${twitterHandler}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={withPrefix('/images/twitter.svg')} className={styles.icon} alt="twitter" />
        </a>
      : null;

  const star = (gold: string | undefined) =>
    gold
      ? <img src={withPrefix('/images/star.svg')} className={styles.icon} alt="star" />
      : null;

  const favicon = (url: string, product: string) =>
    <Img
      src={[
        `https://api.faviconkit.com/${url.split('/')[url.startsWith('http')?2:0]}/144`,
        withPrefix('/images/globe.svg')]}
      className={styles.favicon}
      alt={` logo for ${product}`}
    />;

  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.header}>
          <div className={styles.tagsContainer}>
            <Link to="/" activeClassName={styles.active} >Recommended {type === 'recommended' && `(${nrProducts})`}</Link>
            <Link to="/work" activeClassName={styles.active}>Work {segment === 'Work' && `(${nrProducts})`}</Link>
            <Link to="/edu" activeClassName={styles.active}>Edu {segment === 'Edu' && `(${nrProducts})`}</Link>
            <Link to="/covid-19" activeClassName={styles.active}>Covid-19 {segment === 'Covid-19' && `(${nrProducts})`}</Link>
            <Link to="/all" activeClassName={styles.active} >All {segment === null && type !== 'recommended' && `(${nrProducts})`}</Link>
          </div>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Ftechagainstcoronavirus.com&text=Awesome%20list%20for%20working%20remotely&hashtags=techagainstcoronavirus%2Cremotely%2Cworkremotely%2Clearnremotely"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.tweetaboutthis}
          >
            <img src={withPrefix('/images/twitter-logo.png')} alt="tweet this" />
            <span>Tweet about this</span>
          </a>
        </div>
      </div>
      {products.map(({ data: item}, key) => (
      <a href={`${item.Website}?utm_source=tacv`} target="_blank" className={styles.item} key={key} rel="noopener noreferrer">
        <div className={styles.productName}>
          {favicon(item.Website, item.Product)}
          <div className={styles.name}>{item.Product}</div>
        </div>
        <div className={styles.details}>{item.Details}</div>
        <div className={styles.rightSide}>
          {star(item.Gold)}
          {twitter(item.Twitter)}
          <span className={styles.category}>{item.Software_category}</span>
          <img src={icon} className={styles.icon} alt="click to open" />
        </div>
      </a>
    ))}
  </>
  );
}

const query = graphql`
  query MyQuery {
    allAirtable(sort: {fields: [data___Gold, data___Added, data___Product], order: ASC}) {
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
`;

// container
export default ({ segment, type }) => (
  <StaticQuery
    query={query}
    render={data => <ProductList nodes={data.allAirtable.nodes} segment={segment} type={type} />}
  />
)
