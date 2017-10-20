import React, { Component } from "react";
import scrollToComponent from "react-scroll-to-component";
import "./intro.css";
import "./about-me.css";

import backgroundDiv1 from "../../media_assets/nyc4.jpg";
import anathiLogo from "../../media_assets/anathiIconRedSquare.jpg";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      visible: false
    };
  }

  showMenuOnClick() {
    if (this.state.visible === false) {
      this.setState({ visible: true });
    }
    if (this.state.visible === true) {
      this.setState({ visible: false });
    }
  }

  closeMenuOnClick() {
    if (this.state.visible === true) {
      this.setState({ visible: false });
    }
  }

  closeMenuScrollOverride() {
    if (this.state.visible === true) {
      console.log("Hovered!");
      this.setState({ visible: false });
    }
    if (this.state.visible === false) {
      console.log("Not hovered anymore!");
      scrollToComponent(document.getElementById("about-me-div"), {
        offset: 0,
        align: "top",
        duration: 700
      });
    }
  }

  render() {
    let pageMenuClassName = "page-menu";

    let pageDivOverlayClassName = "page-div-overlay";
    let splashGrettingClassName = "greeting";
    let splashTitleClassName = "title";
    let pageLogoClassName = "page-logo";
    let pageLogoContainerClassName = "page-logo-container";
    let scrollDivClassName = "scrollTo-button-container";

    if (this.state.visible === true) {
      pageMenuClassName += "-visible";

      pageDivOverlayClassName += "-dimmed";
      splashGrettingClassName += "-dimmed";
      splashTitleClassName += "-dimmed";
      pageLogoClassName += "-dimmed";
      pageLogoContainerClassName += "-dimmed";
      scrollDivClassName += "-dimmed";
    }

    return (
      <div className="Home">
        {/* Splash Div */}
        <div
          className="page-div"
          id="splash-div"
          style={{ backgroundImage: `url(${backgroundDiv1})` }}
        >
          <div className={pageDivOverlayClassName}>
            <div
              className="menu-button"
              onClick={this.showMenuOnClick.bind(this)}
            >
              <i className="material-icons" id="menu-icon">
                &#xE5D2;
              </i>
            </div>
            <div className="menu-selection">
              <div className="menu-selection-intro" />
              <div className="menu-line" />
              <div className="menu-selection-aboutUs" />
              <div className="menu-line" />
            </div>
            <div
              className={pageLogoContainerClassName}
              onClick={this.closeMenuOnClick.bind(this)}
            >
              <div
                className={pageLogoClassName}
                onClick={this.closeMenuOnClick.bind(this)}
                style={{
                  backgroundImage: `url(${anathiLogo})`
                }}
              />
            </div>
            <div className={splashGrettingClassName}>Hello. I'm Anathi</div>
            <div className={splashTitleClassName}>
              Frontend Software Developer
            </div>
            <div
              className={scrollDivClassName}
              onClick={this.closeMenuScrollOverride.bind(this)}
            >
              <div className="scrollTo-about-button">
                <div className="scrollTo-text">Scroll Down</div>
                <i className="material-icons" id="scrollTo-icon">
                  &#xE313;
                </i>
              </div>
            </div>
          </div>
        </div>
        <div className="page-div" id="about-me-div" />
        <div className="about-me-page-divider">
          <div className="about-me-page-divider-right">
            <div className="about-me-mosaic">{/* Top right */}</div>
          </div>
          <div className="about-me-page-divider-left" />
        </div>
        <div className="page-div" id="skills-div" />
        <div className="page-div" id="projects-div" />
        <div className="page-div" id="activities-div" />
        <div className="page-div" id="contact-div" />
      </div>
    );
  }
}

export default Home;
