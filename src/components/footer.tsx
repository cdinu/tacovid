import React from "react"
import { withPrefix } from "gatsby";
import styles from './footer.module.scss';
import SmartLink from "./smart-link"

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
      <a href="https://www.producthunt.com/posts/tech-against-coronavirus?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-tech-against-coronavirus" target="_blank" rel="noopener noreferrer" style={{ maxHeight: '54px' }}><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=188153&theme=light" alt="Tech Against Coronavirus - A list of products for #remote working and learning | Product Hunt Embed" style={{width: '250px', height: '54px'}} width="250px" height="54px" /></a>
    </div>
    <div className={styles.copyrightContainer}>
      © {new Date().getFullYear()}, created by
      {` `}
      <a href="https://twitter.com/paulbalogh" target="_blank" rel="noopener noreferrer">Paul Balogh</a> and <a href="https://twitter.com/cdinu" target="_blank" rel="noopener noreferrer">Cristian Dinu</a>, founders
      of <SmartLink href="https://hypersay.com" content="credits">Hypersay</SmartLink>;
      {` `}Contact us at{` `}
      <a href="mailto:hello@techagainstcoronavirus.com">hello@techagainstcoronavirus.com</a>,
      {` `}please don't spam us!
      <br/>
      This is an open source project, built.
      on <SmartLink href="https://www.gatsbyjs.org/" label="Gatsby" content="credits">GatsbyJS</SmartLink>, using
      an <SmartLink href="https://airtable.com/" content="credits">Airtable</SmartLink> database and hosted
      on <SmartLink href="https://github.com/cdinu/tacovid" content="credits">GitHub</SmartLink>.
      Favicons served by <SmartLink href="http://faviconkit.com" content="credits">FaviconKit</SmartLink>.
    </div>
  </footer>
);

export default Footer;
