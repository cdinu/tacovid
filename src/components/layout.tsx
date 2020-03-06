/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./reset.css"
import "./global.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer>
        <div>
          © {new Date().getFullYear()}, created by the team behind
          {` `}
          <a href="https://hypersay.com" target="_blank">hypersay.com</a>, contact us at
          {` `}
          <a href="mailto:hello@techagainstcoronavirus.com">hello@techagainstcoronavirus.com</a>,
          {` `}please don't spam us!
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
