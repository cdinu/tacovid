import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProductList from "../components/products/list";

// These 2 for categories
import CategoriesRenderer from "../components/categories-renderer";
import slugify from "slugify";
import { navigate } from "gatsby";

const IndexPage = () => (
  <Layout>
    <SEO title="Tech against Coronavirus - a list to work and learn remotely" />
    <ProductList type="recommended" />
    <h1>Categories sample implementation</h1>

    As Select

    <select
      onBlur={(event:any) => navigate(event.target.value)}
      onChange={(event:any) => navigate(event.target.value)}
    >
      <option value='/'>--Select category--</option>
      <CategoriesRenderer renderFn={cat =>
        <option value={`/c/${slugify(cat.toLowerCase())}`} key={cat}>{cat}</option>
      } />
    </select>
    <br />
    <br />


    As List:

    <ul>
      <CategoriesRenderer
        sortBy="count"
        renderFn={(cat, count) => (
          <li key={cat}>
            <a href={`/c/${slugify(cat.toLowerCase())}`}>{cat}</a> ({count})
          </li>
        )}
      />
    </ul>
  </Layout>
);

export default IndexPage
