import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProductList from "../components/products/list";

const IndexPage = ({ data }) => (
  <Layout>
      <SEO title="Tech against Coronavirus - a list to work remotely" />
      <ProductList segment="News" />
  </Layout>
);

export default IndexPage
