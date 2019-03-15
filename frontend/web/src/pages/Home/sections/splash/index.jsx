import React, { Component } from 'react'

import './index.css'
// import backdrop from '../../../../media_assets/calorado_view.jpg'

class Splash extends Component {
  render() {
    return (
      <div className="page-div" id="splash-div">
        <div id="logo" />
        <div id="backdrop">
          <div id="page-title">
            <div className="header-content-lg">
              <span id="header-content-lg--thin">Anathi</span>
              <span> Keswa</span>
              <span className="txt_sm"> '97</span>
            </div>
            <div id="profession-row">
              <div className="header-content-md">Frontend Developer</div>
            </div>
            <div id="splash-buttons">
              <div id="btn-resume">
                <i className="material-icons location">save_alt</i> Resume
              </div>
              <div id="btn-about">About Me</div>
            </div>
          </div>

          <div id="backdrop-info">
            <i className="material-icons location">location_on</i>
            Breckenridge, Colorado
          </div>
        </div>
      </div>
    )
  }
}

export default Splash
