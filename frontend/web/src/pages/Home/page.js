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
      visible: false
    };
  }

  // Menu Stuff
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

  // Finding Current Div
  findCurrentPageDiv() {
    let element = document.getElementById("contact-div");
    let position = element.getBoundingClientRect();
    let y = position.bottom;
    let myScreen = document.getElementById("screen-top-position");
    let myScreenPosition = myScreen.getBoundingClientRect();
    let pixelsFromTop = Math.abs(myScreenPosition.bottom);
    let pageHeight = y + pixelsFromTop;

    let splashDivPosistion = 0;
    let halfDivHeight = pageHeight / 3;
    let aboutDivPosistion = pageHeight / 6;
    let skillsDivPosistion = pageHeight / 6 * 2;
    let projectsDivPosistion = pageHeight / 6 * 3;
    let activitiesDivPosistion = pageHeight / 6 * 4;
    let contactDivPosistion = pageHeight / 6 * 5;

    /*
    if (pixelsFromTop >= Math.trunc(aboutDivPosistion * 0.6)) {
    }
    if (
      pixelsFromTop < Math.trunc(aboutDivPosistion * 0.4) &&
      pixelsFromTop <= skillsDivPosistion - (aboutDivPosistion - halfDivHeight)
    ) {
    }
    if (
      pixelsFromTop >= Math.trunc(skillsDivPosistion * 0.4) &&
      pixelsFromTop <= skillsDivPosistion - ( - halfDivHeight)
    ) {
    }
    */

    console.log("The length of the page in pixels = " + pageHeight);
    console.log(
      "The top of you perspective is " +
        pixelsFromTop +
        " pixels from the top of the page"
    );
    console.log(
      "The splash div starts at the pixel value " + splashDivPosistion + "px"
    );
    console.log(
      "The about-me div starts at the pixel value " + aboutDivPosistion + "px"
    );
    console.log(
      "The skills div starts at the pixel value " + skillsDivPosistion + "px"
    );
    console.log(
      "The projects div starts at the pixel value " +
        projectsDivPosistion +
        "px"
    );
    console.log(
      "The activities div starts at the pixel value " +
        activitiesDivPosistion +
        "px"
    );
    console.log(
      "The contact div starts at the pixel value " + contactDivPosistion + "px"
    );
  }

  // Only for the "Scroll Down" Button
  scrollDownOnClick() {
    if (this.state.visible === true) {
      console.log("Hovered. Will scroll on a second click.");
      this.setState({ visible: false });
    }
    if (this.state.visible === false) {
      console.log("Not hovered. Scroll enabled");
      scrollToComponent(document.getElementById("about-me-div"), {
        offset: 0,
        align: "top",
        duration: 900
      });
    }
  }

  // Specific Div Scrolling
  scrollToIntroDivOnClick() {
    this.findCurrentPageDiv();
    this.setState({ visible: false });
    scrollToComponent(document.getElementById("splash-div"), {
      offset: 0,
      align: "top",
      duration: 600
    });
  }
  scrollToAboutDivOnClick() {
    this.setState({ visible: false });
    scrollToComponent(document.getElementById("about-me-div"), {
      offset: 0,
      align: "top",
      duration: 600
    });
  }
  scrollToSkillsDivOnClick() {
    this.setState({ visible: false });
    scrollToComponent(document.getElementById("skills-div"), {
      offset: 0,
      align: "top",
      duration: 600
    });
  }
  scrollToProjectsDivOnClick() {
    this.setState({ visible: false });
    scrollToComponent(document.getElementById("projects-div"), {
      offset: 0,
      align: "top",
      duration: 600
    });
  }
  scrollToActivitiesDivOnClick() {
    this.setState({ visible: false });
    scrollToComponent(document.getElementById("activities-div"), {
      offset: 0,
      align: "top",
      duration: 600
    });
  }
  scrollToContactDivOnClick() {
    this.setState({ visible: false });
    scrollToComponent(document.getElementById("contact-div"), {
      offset: 0,
      align: "top",
      duration: 600
    });
  }

  render() {
    //Page Menu stuff "Dormant" State ClassNames
    let pageMenuButtonIdName = "menu-icon";
    let menuSelectionClassName = "menu-selection";
    let menuSelectionItemClassName = "menu-selection-item";

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

    if (this.state.visible === true) {
      //Page Menu stuff "Active" State ClassNames (APPEND:-clicked/-visible)
      pageMenuButtonIdName += "-clicked";
      menuSelectionClassName += "-visible";
      menuSelectionItemClassName += "-visible";

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
      <div className="Home">
        {/* Splash Div */}
        <div id="screen-top-position" />
        <div
          className="page-div"
          id="splash-div"
          style={{ backgroundImage: `url(${backgroundDiv1})` }}
        >
          <div
            className={splashDivOverlayClassName}
            onClick={this.closeMenuOnClick.bind(this)}
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
                className={menuSelectionItemClassName}
                onClick={this.scrollToIntroDivOnClick.bind(this)}
              >
                Welcome
              </div>
              <div
                className={menuSelectionItemClassName}
                onClick={this.scrollToAboutDivOnClick.bind(this)}
              >
                About Me
              </div>
              <div
                className={menuSelectionItemClassName}
                onClick={this.scrollToSkillsDivOnClick.bind(this)}
              >
                My Skills
              </div>
              <div
                className={menuSelectionItemClassName}
                onClick={this.scrollToProjectsDivOnClick.bind(this)}
              >
                My Projects
              </div>
              <div
                className={menuSelectionItemClassName}
                onClick={this.scrollToActivitiesDivOnClick.bind(this)}
              >
                Activities
              </div>
              <div
                className={menuSelectionItemClassName}
                onClick={this.scrollToContactDivOnClick.bind(this)}
              >
                Contact Me
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
