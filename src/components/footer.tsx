import React from "react"
import { withPrefix } from "gatsby";
import styles from './footer.module.scss';

const Footer = () => (
  <footer>
    <div className={styles.smContainer}>
      {/* <span>Stay in touch with us: </span> */}
      <a href="https://twitter.com/tacovid" target="_blank" rel="noopener noreferrer" className={styles.smBox}>
        <img src={withPrefix('/images/twitter-feather.svg')} alt="" />
        <span>Follow us on Twitter</span>
      </a>
      <a href="https://www.instagram.com/tacovid/" target="_blank" rel="noopener noreferrer" className={styles.smBox}>
        <img src={withPrefix('/images/instagram-feather.svg')} alt="" />
        <span>Follow us on Instagram</span>
      </a>
    </div>
    <div className={styles.copyrightContainer}>
      © {new Date().getFullYear()}, created by
      {` `}
      <a href="https://twitter.com/paulbalogh" target="_blank" rel="noopener noreferrer">Paul Balogh</a> and <a href="https://twitter.com/cdinu" target="_blank" rel="noopener noreferrer">Cristian Dinu</a>, founders of <a href="https://hypersay.com" target="_blank" rel="noopener noreferrer">Hypersay</a>;
      {` `}Contact us at{` `}
      <a href="mailto:hello@techagainstcoronavirus.com">hello@techagainstcoronavirus.com</a>,
      {` `}please don't spam us!
      <br/>
      This is an open source project, built on <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">GatsbyJS</a>, using an <a href="https://airtable.com/" target="_blank" rel="noopener noreferrer">Airtable</a> database and hosted on <a href="https://github.com/cdinu/tacovid" target="_blank" rel="noopener noreferrer">GitHub</a>. Favicons served by <a href="http://faviconkit.com?utm_source=tacovid" target="_blank" rel="noopener noreferrer">FaviconKit</a>.
    </div>
  </footer>
);

export default Footer;
