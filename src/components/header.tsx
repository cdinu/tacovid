import { Link, withPrefix } from 'gatsby';
import React from 'react';
import styles from './header.module.scss';

interface HeaderProps {
  mode: 'slim' | undefined;
}

const Header = ({ mode }: HeaderProps) => {
  const tweetThis = () => (
    <a
      href="https://twitter.com/intent/tweet?url=https%3A%2F%2Ftechagainstcoronavirus.com%2F&via=%40tacovid&text=500+%20products%20for%20remote%20working&hashtags=%23techagainstcoronavirus%20%23remotely%20%23workremotely%20%23learnremotely%20%23workfromhome"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.tweetaboutthis}
    >
      <img src={withPrefix('/images/twitter-logo.png')} alt="tweet this" />
      <span>Tweet about this</span>
    </a>
  );

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div>
          <Link to="/">
            <h1>Tech against Coronavirus</h1>
          </Link>
          {mode !== 'slim' ? (
            <>
              <p className="">
                Here are 500+ curated products on this list. Explore the list to
                find which products can help you work and learn remotely.
              </p>
              <div className="">
                <span>Do you know of a product that should be here?</span>
              </div>
              <Link to="/submit" className={styles.button}>
                Add product
              </Link>
              {tweetThis()}
            </>
          ) : null}
        </div>
        {mode !== 'slim' ? (
          <img src={withPrefix('/images/flying-man.svg')} alt="dude" />
        ) : null}
      </div>
    </header>
  );
};

export default Header;
