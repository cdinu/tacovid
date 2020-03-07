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
          <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-size="large" data-text="Awesome list for remote learning https://techagainstcoronavirus.com" data-hashtags="techagainstcoronavirus" data-related="@tacovid" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </div>
      </div>
      {nodes.filter(({data}) => data.Added).map(({ data: item}, key) => (
      <a href={`${item.Website}?utm=tacv`} className={styles.item} key={key}>
        <div className={styles.productName}>
          <img src={`https://api.faviconkit.com/${item.Website.split('/')[item.Website.startsWith('http')?2:0]}/144`} className={styles.favicon} alt={` logo for ${item.Product}`} />
          <div>{item.Product}</div>
        </div>
        <span className={styles.details}>{item.Details}</span>
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
