import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styles from './list.module.scss';
import icon from '../../images/icons/hs-url.svg';

// component dumb
const ProductList = ({ nodes }) => {
  const products = nodes.filter(({data}) => data.Added);
  const nrProducts = products.length;

  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.header}>
          <span>{nrProducts} products</span>
          <span>Tweet about this</span>
        </div>
      </div>
      {nodes.filter(({data}) => data.Added).map(({ data: item }) => (
      <a href={`${item.Website}?utm=tacv`} className={styles.item} key={item.productName}>
        <div className={styles.productName}>
          {/* <img src={`https://www.google.com/s2/favicons?domain=${item.Website}`} /> */}
          <img src={`https://api.faviconkit.com/${item.Website.split('/')[item.Website.startsWith('http')?2:0]}/144`} className={styles.favicon} alt={` logo for ${item.Product}`} />
          {/* <img src={`https://api.statvoo.com/favicon/?url=${item.Website.split('/')[item.Website.startsWith('http')?2:0]}`} className={styles.favicon} /> */}
          <div>{item.Product}</div>
        </div>
        <span className={styles.details}>{item.Details}</span>
        {/* <span>{item.Countries?.join(' and ')}</span> */}
        <span className={styles.category}>{item.Software_category}</span>
        <img src={icon} className={styles.icon} alt="click to open" />
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
        }
      }
    }
  }
`;

// container
export default () => (
  <StaticQuery
    query={query}
    render={data => <ProductList nodes={data.allAirtable.nodes} />}
  />
)
