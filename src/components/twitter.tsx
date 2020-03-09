import React from "react";
import { withPrefix } from 'gatsby';

const TwitterContainer = () => {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://platform.twitter.com/widgets.js";
  //   document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  // }, []);

  return (
    <section className="twitterContainer">
      <div className="twitter-mention-button">
        <a
          className="twitter-timeline"
          data-theme="dark"
          data-size="large"
          data-tweet-limit="5"
          data-text="Awesome list for remote learning https://techagainstcoronavirus.com"
          data-hashtags="techagainstcoronavirus"
          // data-related="@tacovid"
          data-chrome="noheader nofooter noborders"
          data-show-count="false"
          href="https://twitter.com/intent/tweet?url=https%3A%2F%2Ftechagainstcoronavirus.com&text=Awesome%20list%20for%20remote%20learning&hashtags=techagainstcoronavirus%2C%20remotely%2C%20workremotely%2C%20learnremotely"
        >
          <img src={withPrefix('/images/tweetaboutthis.png')} alt="tweet this" />
        </a>
      </div>
    </section>
  );
};

export default TwitterContainer;
