/* IGNORE ME */

//Page Menu stuff "Dormant" State ClassNames
let pageMenuButtonIdName = "menu-icon";
let menuSelectionClassName = "menu-selection";
let menuSelectionItemClassName = "menu-selection-item";

//Div Overlay "Dormant" ClassNames
let splashDivOverlayClassName = "page-div-overlay";
let aboutDivOverlayClassName = "page-div-overlay";
let skillsDivOverlayClassName = "page-div-overlay";
let projectsDivOverlayClassName = "page-div-overlay";
let contactDivOverlayClassName = "page-div-overlay";

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
  aboutDivOverlayClassName += "-dimmed";
  skillsDivOverlayClassName += "-dimmed";
  projectsDivOverlayClassName += "-dimmed";
  contactDivOverlayClassName += "-dimmed";

  //Splash-Div stuff "Active" ClassNames
  splashGrettingClassName += "-dimmed";
  splashTitleClassName += "-dimmed";
  pageLogoClassName += "-dimmed";
  pageLogoContainerClassName += "-dimmed";
  scrollDivClassName += "-dimmed";
}
