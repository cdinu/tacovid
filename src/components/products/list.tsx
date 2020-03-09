import React from "react";
import { StaticQuery, graphql, Link, withPrefix } from "gatsby";
import styles from './list.module.scss';
import icon from '../../images/icons/hs-url.svg';
import Img from 'react-image';

export interface ProductListProps {
  nodes: any;
  segment: 'Work' | 'Edu' | 'News' | undefined;
}

// component dumb
const ProductList:React.FC<ProductListProps> = ({ nodes, segment }) => {
  let products = nodes.filter(({data}) => data.Added).sort((a,b) => a.Added-b.Added); // TO DO sorting by Dinu

  if (segment) {
    products = products.filter( ({data})  => (data.Tags || []).indexOf(segment) > -1);
  }

  const nrProducts = products.length;

  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.header}>
          <div className={styles.tagsContainer}>
            <Link to="/" activeClassName={styles.active} >All {segment === null && `(${nrProducts})`}</Link>
            <Link to="/work" activeClassName={styles.active}>Work {segment === 'Work' && `(${nrProducts})`}</Link>
            <Link to="/edu" activeClassName={styles.active}>Edu {segment === 'Edu' && `(${nrProducts})`}</Link>
            <Link to="/news" activeClassName={styles.active}>News {segment === 'News' && `(${nrProducts})`}</Link>
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
          <Img
            src={[
              `https://api.faviconkit.com/${item.Website.split('/')[item.Website.startsWith('http')?2:0]}/144`,
              withPrefix('/images/globe.svg')]}
            className={styles.favicon}
            alt={` logo for ${item.Product}`}
          />
          <div className={styles.name}>{item.Product}</div>
        </div>
        <span className={styles.details}>{item.Details}</span>
        <span className={styles.rightSide}>
          <span className={styles.category}>{item.Software_category}</span>
          <img src={icon} className={styles.icon} alt="click to open" />
        </span>
      </a>
    ))}
  </>
  );
}

const query = graphql`
  query MyQuery {
    allAirtable {
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
        }
      }
    }
  }
`;

// container
export default ({ segment }) => (
  <StaticQuery
    query={query}
    render={data => <ProductList nodes={data.allAirtable.nodes} segment={segment} />}
  />
)
