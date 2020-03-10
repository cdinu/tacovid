import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProductList from "../components/products/list";

const IndexPage = ({ data }) => (
  <Layout>
      <SEO title="Tech against Coronavirus - a list to learn remotely" />
      <ProductList segment={null} type={null} />
  </Layout>
);

export default IndexPage
