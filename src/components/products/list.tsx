import React from "react";
import { StaticQuery, graphql, Link, withPrefix } from "gatsby";
import styles from './list.module.scss';
import icon from '../../images/icons/hs-url.svg';

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
            <Link to="/" activeClassName={styles.active} >All {segment === null && `(${nrProducts} products)`}</Link>
            <Link to="/work" activeClassName={styles.active}>Work {segment === 'Work' && `(${nrProducts} products)`}</Link>
            <Link to="/edu" activeClassName={styles.active}>Edu {segment === 'Edu' && `(${nrProducts} products)`}</Link>
            <Link to="/news" activeClassName={styles.active}>News {segment === 'News' && `(${nrProducts} products)`}</Link>
          </div>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Ftechagainstcoronavirus.com&text=Awesome%20list%20for%20working%20remotely&hashtags=techagainstcoronavirus%2C%20remotely%2C%20workremotely%2C%20learnremotely"
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
