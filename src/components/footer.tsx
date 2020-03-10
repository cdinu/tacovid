import React from "react"

const Footer = () => (
  <footer>
    <div>
      © {new Date().getFullYear()}, created by
      {` `}
      <a href="https://twitter.com/paulbalogh" target="_blank" rel="noopener noreferrer">Paul Balogh</a> and <a href="https://twitter.com/cdinu" target="_blank" rel="noopener noreferrer">Cristian Dinu</a>, founders of <a href="https://hypersay.com" target="_blank" rel="noopener noreferrer">Hypersay</a>;
      {` `}Contact us at{` `}
      <a href="mailto:hello@techagainstcoronavirus.com">hello@techagainstcoronavirus.com</a>,
      {` `}please don't spam us!
      <br/>
      This is an open source project, built on <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">GatsbyJS</a> and 
      hosted on <a href="https://github.com/cdinu/tacovid" target="_blank" rel="noopener noreferrer">GitHub</a>.
    </div>
  </footer>
);

export default Footer;
