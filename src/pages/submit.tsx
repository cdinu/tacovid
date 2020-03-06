import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = ({ data }) => (
  <Layout>
      <SEO title="Tell us" />
      <iframe
        className="airtable-embed airtable-dynamic-height"
        src="https://airtable.com/embed/shrvL17QCAuRqtYpA?backgroundColor=yellow"
        frameBorder="0" width="100%"
        height="1000"
        style={{
          border: "none",
        }}></iframe>
  </Layout>
);

export default IndexPage
