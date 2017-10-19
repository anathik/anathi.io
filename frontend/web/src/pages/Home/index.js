import React, { Component } from "react";
import scrollToComponent from "react-scroll-to-component";
import "./index.css";

import backgroundDiv1 from "../../media_assets/nyc3.jpg";
import anathiLogo from "../../media_assets/anathiIconRedSquare.jpg";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        {/* This is the first page length. Welcome */}
        <div
          className="page-div"
          id="splash-div"
          style={{ backgroundImage: `url(${backgroundDiv1})` }}
        >
          <div className="page-div-background-overlay">
            <div className="menu-bar">
              <div className="menu-button">
                <i className="material-icons" id="menu-icon">
                  &#xE5D2;
                </i>
              </div>
              <div className="page-menu-items">
                <div className="back-to-top-button-container">
                  <div
                    className="back-to-top-button"
                    onClick={() =>
                      scrollToComponent(document.getElementById("splash-div"), {
                        offset: 0,
                        align: "top",
                        duration: 500
                      })}
                  >
                    <div className="back-to-top-button-text">Back to Top</div>
                  </div>
                </div>
              </div>
              <div className="menu-div-view" />
            </div>
            <div id="page-logo-container">
              <div
                id="page-logo"
                style={{
                  backgroundImage: `url(${anathiLogo})`
                }}
              />
            </div>
            <div id="greeting">Hello. I'm Anathi</div>
            <div id="title">Frontend Software Developer</div>
            <div className="scrollTo-button-container">
              <div
                className="scrollTo-about-button"
                onClick={() =>
                  scrollToComponent(document.getElementById("about-me-div"), {
                    offset: 0,
                    align: "top",
                    duration: 500
                  })}
              >
                <div className="scrollTo-text">About Me</div>
                <i className="material-icons" id="scrollTo-icon">
                  &#xE313;
                </i>
              </div>
            </div>
          </div>
        </div>
        <div className="page-div" id="about-me-div" />
        <div className="page-div" id="skills-div" />
        <div className="page-div" id="projects-div" />
        <div className="page-div" id="activities-div" />
        <div className="page-div" id="contact-div" />
      </div>
    );
  }
}

export default Home;
