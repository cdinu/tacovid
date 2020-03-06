import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProductList from "../components/products/list";
import SubscribeForm from "../components/subscribe";

const IndexPage = ({ data }) => (
  <Layout>
      <SEO title="Tell us" />
      <iframe
        className="airtable-embed airtable-dynamic-height"
        src="https://airtable.com/embed/shrvL17QCAuRqtYpA?backgroundColor=yellow"
        frameborder="0" onmousewheel="" width="100%"
        height="1000"
        style={{
          border: "none",
        }}></iframe>
  </Layout>
);

export default IndexPage
