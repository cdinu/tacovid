import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProductList from "../components/products/list";

import styles from "./index.module.scss";

const IndexPage = ({ data }) => (
  <Layout>
      <SEO title="Home" />
      <ProductList />
      <br />
      <div>
        <Link to="/submit" className={styles.tellus}>Tell us about a product</Link>
      </div>
  </Layout>
);

export default IndexPage
