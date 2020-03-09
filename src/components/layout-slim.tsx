import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./reset.css"
import "./global.css"
import Footer from "./footer"

const LayoutSlim = ({ children }) => {
  return (
    <>
      <Header mode="slim" />
      <main>{children}</main>
      <Footer />
    </>
  )
}

LayoutSlim.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutSlim
