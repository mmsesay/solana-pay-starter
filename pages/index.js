import React from "react";
import HeadComponent from "../components/Head";

// Constants
const BUILDSPACE_TWITTER_HANDLE = "_buildspace";
const BUILDSPACE_TWITTER_LINK = `https://twitter.com/${BUILDSPACE_TWITTER_HANDLE}`;

const MY_TWITTER_HANDLE = "DeeMaejor";
const MY_TWITTER_LINK = `https://twitter.com/${MY_TWITTER_HANDLE}`;

const App = () => {
  return (
    <div className="App">
      <HeadComponent />
      <div className="container">
        <header className="header-container">
          <p className="header">Bobo-jama Store 😀</p>
          <p className="sub-text">
            Your store for all framed artworks and other accessories
          </p>
        </header>

        <main>
          <div className="image-panel">
            <div className="image-frame">
              <img
                src="/images/chico-code.jpeg"
                alt="chico-code-pic"
                className="image"
              />
            </div>
          </div>
        </main>

        <div className="footer-container">
          <img
            alt="Twitter Logo"
            className="twitter-logo"
            src="twitter-logo.svg"
          />
          <a
            className="footer-text"
            href={BUILDSPACE_TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${BUILDSPACE_TWITTER_HANDLE}`}</a>
          <a
            className="footer-text-2"
            href={MY_TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`and shipped by @${MY_TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
