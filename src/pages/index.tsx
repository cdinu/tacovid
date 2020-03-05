import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = ({ data }) => {
  console.log('data :', data);
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      {data.allAirtable.nodes.map(({ data: item }) => (
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
    </Layout>
  );
}

export const query = graphql`
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

export default IndexPage
