import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProductList from "../components/products/list";
import SubscribeForm from "../components/subscribe";

const IndexPage = ({ data }) => (
  <Layout>
      <SEO title="Home" />
      <h1>Hi, people!</h1>
      <ProductList />
      <br />
      <div>
        <p>Subscribe now:</p>
        <SubscribeForm />
      </div>
  </Layout>
);

export default IndexPage
