import React from "react";

import LayoutSlim from "../components/layout-slim";
import SEO from "../components/seo";

const IndexPage = ({ data }) => (
  <LayoutSlim>
      <SEO title="Tell us" />
      <iframe
        className="airtable-embed airtable-dynamic-height"
        src="https://airtable.com/embed/shrvL17QCAuRqtYpA?backgroundColor=yellow"
        frameBorder="0" width="100%"
        height="1100"
        style={{
          border: "none",
        }}
        title="Airtable form"></iframe>
  </LayoutSlim>
);

export default IndexPage
