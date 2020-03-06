import React from "react";
import { StaticQuery, graphql } from "gatsby";

const ProductList = ({ nodes }) => {
  return (
    <>
      {nodes.map(({ data: item }) => (
      <div>
        <h1>{item.Product}</h1>
        <span>{item.Details}</span>
        <br />
        <span>{item.Details}</span>
        <br />
        <span>{item.Countries.join(' and ')}</span>
        <br />
        <span style={{display: 'inline-block', background: 'yellow'}}>{item.Software_category}</span>
        <br />
        <a href={`${item.Website}?utm=tacv`} target='blank'>website</a>
        <hr />
      </div>
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

export default () => (
  <StaticQuery
    query={query}
    render={data => <ProductList nodes={data.allAirtable.nodes} />}
  />
)

