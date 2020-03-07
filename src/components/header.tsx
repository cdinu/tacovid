import { Link } from "gatsby"
import React from "react"
import styles from './header.module.scss';
import svg from '../images/dude.svg';

interface HeaderProps {
  mode: 'slim' | undefined;
}

const Header = ({ mode }: HeaderProps) => {

  console.log(mode);

  return (
  <header className={styles.header}>
    <div className={styles.headerContainer}>
      <div>
        <Link to="/"><h1>Tech against Coronavirus</h1></Link>
        {mode !== 'slim'
          ?
            <>
              <p className="">
                It is very likely that 1/5 of us will have to work for home in the very near future due to the coronavirus outbreak. So here’s a list of products you can use to maintain collaboration and work remotely with your team. As a distributed team ourselves, we’ve used many of these over the past 5 years. Please contribute with any software solution you’ve heard of or used yourself that might benefit others.<br />
                Let’s do this together.
              </p>
              <div className="">
                <span>Do you know of a product that should be here?</span>
              </div>
              <Link to="/submit" className={styles.button}>Add product</Link>
            </>
          : null }
      </div>
      {mode !== 'slim' ? <img src={svg} alt="dude" /> : null}
    </div>
  </header>
)}

export default Header
