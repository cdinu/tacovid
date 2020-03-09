/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql, withPrefix } from "gatsby"

interface Meta {
  name: string;
  content: string;
}
interface SEOProps {
  description?: string;
  meta?: Meta[];
  keywords?: string[];
  title: string;
  shareImage?: string;
}

const SEO = ({
    description,
    meta = [],
    keywords = [],
    title,
    shareImage = 'share-image.jpg',
  }: SEOProps) => {

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const lang = "en";

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: 'og:locale',
          content: lang,
        },
        {
          name: 'og:url',
          content: 'https://techagainstcoronavirus.com',
        },
        {
          property: 'og:image',
          content: withPrefix(`/images/${shareImage}`), // add here real image
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: 'twitter:url',
          content: 'https://techagainstcoronavirus.com',
        },
        {
          name: 'twitter:image',
          content: withPrefix(`/images/${shareImage}`), // add here real image
        },
      ]
      .concat(
        keywords.length > 0
          ? {
              name: 'keywords',
              content: keywords.join(', '),
            }
          : [],
      )
      .concat(meta)}
    />
  )
}

export default SEO
