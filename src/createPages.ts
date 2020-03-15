import { resolve } from 'path';
import { CreatePagesArgs } from 'gatsby';
import slugify from 'slugify';

export interface Product {
  Product: string;
  Added?: string;
  Countries?: [string];
  Details?: string;
  Software_category?: string;
  Website: string;
  Twitter?: string;
  Tags?: [string];
  Gold?: boolean;
}

interface AllAirtable {
  allAirtable: {
    nodes: [{ data: Product }];
  };
}

export const createPages = async ({ graphql, actions }: CreatePagesArgs) => {
  const result = await graphql(`
    query MyQuery {
      allAirtable(
        sort: {
          fields: [data___Gold, data___Added, data___Product]
          order: ASC
        }
      ) {
        nodes {
          data {
            Product
            Added
            Countries
            Details
            Software_category
            Website
            Twitter
            Tags
            Gold
          }
        }
      }
    }
  `);

  const {
    allAirtable: { nodes },
  } = result.data as AllAirtable;

  nodes.filter(node => node.data.Added).forEach((node) => {
    const { data: item } = node;
    const slug = `/p/${slugify(item.Product.toLowerCase())}`;
    actions.createPage({
      component: resolve(__dirname, 'templates/product.tsx'),
      context: {
        item,
      },
      path: slug,
    });
  });
};
