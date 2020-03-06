import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProductList from "../components/products/list";

const IndexPage = ({ data }) => (
  <Layout>
      <SEO title="Home" />
      <ProductList />
      <br />
      <div>
        <Link to="/submit">Tell us about a product</Link>
      </div>
  </Layout>
);

export default IndexPage
