import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./reset.css"
import "./global.css"

const LayoutSlim = ({ children }) => {
  return (
    <>
      <Header mode="slim" />
      <main>{children}</main>
      <footer>
        <div>
          © {new Date().getFullYear()}, created by the team behind
          {` `}
          <a href="https://hypersay.com" target="_blank" rel="noopener noreferrer">hypersay.com</a>, contact us at
          {` `}
          <a href="mailto:hello@techagainstcoronavirus.com">hello@techagainstcoronavirus.com</a>,
          {` `}please don't spam us!
        </div>
      </footer>
    </>
  )
}

LayoutSlim.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutSlim
