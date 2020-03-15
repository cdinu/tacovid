import React from 'react';
import Layout from '../components/layout-slim';
import { Product } from "../createPages";
import Helmet from "react-helmet";
import SmartLink from "../components/smart-link"

interface ProductPageProps {
  pageContext: {
    item: Product
  }
};

export default (props:ProductPageProps) => {
  const { pageContext: { item }} = props;

  return (
    <Layout>
      <Helmet>
        <script
          src="//cdn.embedly.com/widgets/platform.js"
          type="text/javascript"
          async
        ></script>
      </Helmet>
      <h1>{item.Product}</h1>
      <p>{item.Details}</p>
      <p>Added: {item.Added}</p>
      <p>Available: {item.Countries?.join()}</p>
      <p>Category: {item.Software_category}</p>
      <p>Tags: {item.Tags?.join()}</p>
      <p>
        <SmartLink
          className="embedly-card"
          href={`https://twitter.com/${item.Twitter}`}
          label={item.Product}
          content="product-page"
        >{item.Twitter}</SmartLink>
      </p>
      <p>
        <SmartLink
          className="embedly-card"
          href={item.Website}
          label={item.Product}
          content="product-page"
        >{item.Website}</SmartLink>
      </p>
    </Layout>
  );
};
