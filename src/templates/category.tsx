import React from 'react';
import Layout from '../components/layout-slim';
import { Product } from "../createPages";
import { ProductList } from "../components/products/list"

interface CategoryPageProps {
  pageContext: {
    category: string
    nodes: [{ data: Product }];
  }
}

export default (props:CategoryPageProps) => {
  const { pageContext: { category, nodes }} = props;

  return (
    <Layout>
      <h1>{category}</h1>
      <ProductList nodes={nodes} category={category} />
    </Layout>
  );
};
