import React, { Component } from "react";
import scrollToComponent from "react-scroll-to-component";
import "./intro.css";
import "./about-me.css";
import "./menu-item.css";

import backgroundDiv1 from "../../media_assets/nyc4.jpg";
import anathiLogo from "../../media_assets/anathiIconRedSquare.jpg";
import introLogo from "../../media_assets/sent-mail.svg";
import skillLogo from "../../media_assets/skill.svg";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      perspective: ""
    };
  }

  perspectiveDidChange() {}

  componentDidMount() {
    let ticking = false;

    window.addEventListener("scroll", e => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          this.readScreenHeight();
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  readScreenHeight() {
    let getPixels = document
      .getElementsByClassName("Home")[0]
      .getBoundingClientRect();
    let divLength = getPixels.height / 6;
    let location = Math.abs(getPixels.top);
    if (location >= 0 && location < divLength) {
      this.setState({ perspective: "menu-select-intro" });
    }
    if (location >= divLength && location < 2 * divLength) {
      this.setState({ perspective: "menu-select-about" });
    }
    if (location >= 2 * divLength && location < 3 * divLength) {
      this.setState({ perspective: "menu-select-skills" });
    }
    if (location >= 3 * divLength && location < 4 * divLength) {
      this.setState({ perspective: "menu-select-projects" });
    }
    if (location >= 4 * divLength && location < 4.9 * divLength) {
      this.setState({ perspective: "menu-select-activities" });
    }
    if (location >= 4.9 * divLength && location < 6 * divLength) {
      this.setState({ perspective: "menu-select-contact" });
    }
  }

  toggleMenuOnClick() {
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
  openMenuOnClick() {
    if (this.state.visible === false) {
      this.setState({ visible: true });
    }
  }

  // Only for the "Scroll Down" Button
  scrollDownOnClick() {
    if (this.state.visible === true) {
      this.setState({ visible: false });
    }
    if (this.state.visible === false) {
      scrollToComponent(document.getElementById("about-me-div"), {
        offset: 0,
        align: "top",
        duration: 900
      });
    }
  }

  // Specific Div Scrolling
  scrollToIntroDivOnClick() {
    if (this.state.perspective !== "menu-select-intro") {
      scrollToComponent(document.getElementById("splash-div"), {
        offset: 0,
        align: "top",
        duration: 600
      });
      this.setState({ visible: false });
    }
  }
  scrollToAboutDivOnClick() {
    if (this.state.perspective !== "menu-select-about") {
      scrollToComponent(document.getElementById("about-me-div"), {
        offset: 0,
        align: "top",
        duration: 600
      });
      this.setState({ visible: false });
    }
  }
  scrollToSkillsDivOnClick() {
    if (this.state.perspective !== "menu-select-skills") {
      scrollToComponent(document.getElementById("skills-div"), {
        offset: 0,
        align: "top",
        duration: 600
      });
      this.setState({ visible: false });
    }
  }
  scrollToProjectsDivOnClick() {
    if (this.state.perspective !== "menu-select-projects") {
      scrollToComponent(document.getElementById("projects-div"), {
        offset: 0,
        align: "top",
        duration: 600
      });
      this.setState({ visible: false });
    }
  }
  scrollToActivitiesDivOnClick() {
    if (this.state.perspective !== "menu-select-activities") {
      scrollToComponent(document.getElementById("activities-div"), {
        offset: 0,
        align: "top",
        duration: 600
      });
    }
    this.setState({ visible: false });
  }
  scrollToContactDivOnClick() {
    this.setState({ visible: false });
    if (this.state.perspective !== "menu-select-contact") {
      scrollToComponent(document.getElementById("contact-div"), {
        offset: 0,
        align: "top",
        duration: 600
      });
      this.setState({ visible: false });
    }
  }

  render() {
    //Page Menu stuff "Dormant" State ClassNames
    let pageMenuButtonIdName = "menu-icon";
    let menuSelectionClassName = "menu-selection";

    let menuIntroClassName = "menu-select-intro";
    let menuAboutClassName = "menu-select-about";
    let menuSkillsClassName = "menu-select-skills";
    let menuProjectsClassName = "menu-select-projects";
    let menuActivitiesClassName = "menu-select-activities";
    let menuContactClassName = "menu-select-contact";

    //Div Overlay "Dormant" ClassNames
    let splashDivOverlayClassName = "splash-div-overlay";
    //let aboutDivOverlayClassName = "about-div-overlay";
    //let skillsDivOverlayClassName = "skills-div-overlay";
    //let projectsDivOverlayClassName = "projects-div-overlay";
    //let contactDivOverlayClassName = "contact-div-overlay";

    //Splash-Div stuff "Dormant" ClassNames
    let splashGrettingClassName = "greeting";
    let splashTitleClassName = "title";
    let pageLogoClassName = "page-logo";
    let pageLogoContainerClassName = "page-logo-container";
    let scrollDivClassName = "scrollTo-button-container";

    if (this.state.perspective === menuIntroClassName) {
      menuIntroClassName += "-current";
    }
    if (this.state.perspective === menuAboutClassName) {
      menuAboutClassName += "-current";
    }
    if (this.state.perspective === menuSkillsClassName) {
      menuSkillsClassName += "-current";
    }
    if (this.state.perspective === menuProjectsClassName) {
      menuProjectsClassName += "-current";
    }
    if (this.state.perspective === menuActivitiesClassName) {
      menuActivitiesClassName += "-current";
    }
    if (this.state.perspective === menuContactClassName) {
      menuContactClassName += "-current";
    }

    if (this.state.visible === true) {
      //Page Menu stuff "Active" State ClassNames (APPEND:-clicked/-visible)
      pageMenuButtonIdName += "-clicked";
      menuSelectionClassName += "-visible";
      menuIntroClassName += "-visible";
      menuAboutClassName += "-visible";
      menuSkillsClassName += "-visible";
      menuProjectsClassName += "-visible";
      menuActivitiesClassName += "-visible";
      menuContactClassName += "-visible";

      //Div Overlay "Active" State ClassNames (APPEND:-dimmed)
      splashDivOverlayClassName += "-dimmed";
      //aboutDivOverlayClassName += "-dimmed";
      //skillsDivOverlayClassName += "-dimmed";
      //projectsDivOverlayClassName += "-dimmed";
      //contactDivOverlayClassName += "-dimmed";

      //Splash-Div stuff "Active" ClassNames
      splashGrettingClassName += "-dimmed";
      splashTitleClassName += "-dimmed";
      pageLogoClassName += "-dimmed";
      pageLogoContainerClassName += "-dimmed";
      scrollDivClassName += "-dimmed";
    }

    return (
      <div className="Home" onLoad={this.componentDidMount}>
        {/* Splash Div */}
        <div id="screen-top-position" />
        <div
          className="page-div"
          id="splash-div"
          style={{ backgroundImage: `url(${backgroundDiv1})` }}
        >
          <div
            className={splashDivOverlayClassName}
            onClick={this.readScreenHeight.bind(this)}
          >
            <div
              className="menu-button"
              onClick={this.toggleMenuOnClick.bind(this)}
            >
              <i className="material-icons" id={pageMenuButtonIdName}>
                &#xE5D2;
              </i>
            </div>
            <div className={menuSelectionClassName}>
              <div
                className={menuIntroClassName}
                onClick={this.scrollToIntroDivOnClick.bind(this)}
              >
                <div>Intro</div>
              </div>
              <div
                className={menuAboutClassName}
                onClick={this.scrollToAboutDivOnClick.bind(this)}
              >
                <div>About Me</div>
              </div>
              <div
                className={menuSkillsClassName}
                onClick={this.scrollToSkillsDivOnClick.bind(this)}
              >
                <div>My Skills</div>
              </div>
              <div
                className={menuProjectsClassName}
                onClick={this.scrollToProjectsDivOnClick.bind(this)}
              >
                <div>My Projects</div>
              </div>
              <div
                className={menuActivitiesClassName}
                onClick={this.scrollToActivitiesDivOnClick.bind(this)}
              >
                <div>Activities</div>
              </div>
              <div
                className={menuContactClassName}
                onClick={this.scrollToContactDivOnClick.bind(this)}
              >
                <div>Contact Me</div>
              </div>
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
            <div
              className={splashGrettingClassName}
              onClick={this.closeMenuOnClick.bind(this)}
            >
              Hello. I'm Anathi
            </div>
            <div
              className={splashTitleClassName}
              onClick={this.closeMenuOnClick.bind(this)}
            >
              Frontend Software Developer
            </div>
            <div
              className={scrollDivClassName}
              onClick={this.scrollDownOnClick.bind(this)}
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
        <div className="page-div" id="about-me-div">
          <div className="about-me-page-divider">
            <div className="about-me-page-divider-right">
              <div className="about-me-mosaic">{/* Top right */}</div>
            </div>
            <div className="about-me-page-divider-left" />
          </div>
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
