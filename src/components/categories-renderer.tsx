import React from "react";
import { useStaticQuery, graphql } from "gatsby";

interface CategoriesRendererProps {
  renderFn: (categoryName: string, count?: number) => React.ReactNode;
  sortBy?: 'name'|'count';
}

const CategoriesRenderer:React.FC<CategoriesRendererProps> = ({ renderFn, sortBy}) => {
  const { allAirtable: { nodes }} = useStaticQuery(graphql`
    query CategoriesQuery {
      allAirtable {
        nodes {
          data {
            Software_category
          }
        }
      }
    }
  `);

  let cats = nodes
    .map(
      ({ data: { Software_category: cat } }: { data: { Software_category: string } }) =>
      cat === 'other (please specify)' ? 'other' : cat
    );

  const counts:{[category: string]:number} = {};
  for(let cat of cats) {
    counts[cat] = (counts[cat] || 0) + 1;
  }

  // @ts-ignore
  const components = [...new Set<string>(cats)]
    .sort((a, b) => {
      if (sortBy === 'count') {
        return (counts[a] < counts[b]) ? 1 : -1;
      }
      return (a.toLowerCase() < b.toLowerCase()) ? -1 : 1;
    })
    .map(
      cat => renderFn(cat, counts[cat])
    )
  return components;
};

export default CategoriesRenderer;
