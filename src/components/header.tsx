import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './header.module.scss';

import svg from '../images/dude.svg';

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.headerContainer}>
      <div>
        <h1>{siteTitle}</h1>
        <p className="">
          It is very likely that 1/5 of us will have to work for home in the very near future due to the coronavirus outbreak. So here’s a list of products you can use to maintain collaboration and work remotely with your team. As a distributed team ourselves, we’ve used many of these over the past 5 years. Please contribute with any software solution you’ve heard of or used yourself that might benefit others.<br />
          Let’s do this together.
        </p>
        <div className="">
          <span>Do you know of a product that should be here?</span>
        </div>
        <Link to="/submit" className={styles.button}>Add product</Link>
      </div>
      <img src={svg} />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
