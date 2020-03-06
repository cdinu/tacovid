module.exports = {
  siteMetadata: {
    title: `Tech against Coronavirus`,
    description: `It is very likely that 1/5 of us will have to work for home in the very near future due to the coronavirus outbreak. So here’s a list of products you can use to maintain collaboration and work remotely with your team. As a distributed team ourselves, we’ve used many of these over the past 5 years. Please contribute with any software solution you’ve heard of or used yourself that might benefit others.`,
    author: `@techagainstcovid`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        // jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY, // may instead specify via env, see below
        tables: [
          {
            baseId: process.env.AIRTABLE_DB_ID,
            tableName: process.env.AIRTABLE_DB_TABLE,
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analy`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: false,
        respectDNT: true,
        pageTransitionDelay: 0,
        cookieDomain: "techagainstcoronavirus.com",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
