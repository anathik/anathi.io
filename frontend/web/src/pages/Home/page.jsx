import React, { Component } from 'react'
import scrollToComponent from 'react-scroll-to-component'

import './intro.css'
import './menu-item.css'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      visible: true,
      perspective: ''
    }
  }

  perspectiveDidChange() {}

  componentDidMount() {
    this.readScreenHeight()
    let ticking = false

    window.addEventListener('scroll', e => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          this.readScreenHeight()
          ticking = false
        })
        ticking = true
      }
    })
  }

  readScreenHeight() {
    let getPixels = document
      .getElementsByClassName('Home')[0]
      .getBoundingClientRect()
    let divLength = getPixels.height / 6
    let location = Math.abs(getPixels.top)
    if (location >= 0 && location < divLength) {
      this.setState({ perspective: 'menu-select-intro' })
    }
    if (location >= divLength && location < 2 * divLength) {
      this.setState({ perspective: 'menu-select-about' })
    }
    if (location >= 2 * divLength && location < 3 * divLength) {
      this.setState({ perspective: 'menu-select-skills' })
    }
    if (location >= 3 * divLength && location < 4 * divLength) {
      this.setState({ perspective: 'menu-select-projects' })
    }
    if (location >= 4 * divLength && location < 4.9 * divLength) {
      this.setState({ perspective: 'menu-select-contact' })
    }
  }

  // Only for the "Scroll Down" Button
  scrollDownOnClick() {
    if (this.state.visible === false) {
      scrollToComponent(document.getElementById('about-me-div'), {
        offset: 0,
        align: 'top',
        duration: 900
      })
    }
  }

  // Specific Div Scrolling
  scrollToIntroDivOnClick() {
    if (this.state.perspective !== 'menu-select-intro') {
      scrollToComponent(document.getElementById('splash-div'), {
        offset: 0,
        align: 'top',
        duration: 600
      })
    }
  }

  scrollToAboutDivOnClick() {
    if (this.state.perspective !== 'menu-select-about') {
      scrollToComponent(document.getElementById('about-me-div'), {
        offset: 0,
        align: 'top',
        duration: 600
      })
    }
  }
  scrollToSkillsDivOnClick() {
    if (this.state.perspective !== 'menu-select-skills') {
      scrollToComponent(document.getElementById('skills-div'), {
        offset: 0,
        align: 'top',
        duration: 600
      })
    }
  }

  scrollToProjectsDivOnClick() {
    if (this.state.perspective !== 'menu-select-projects') {
      scrollToComponent(document.getElementById('projects-div'), {
        offset: 0,
        align: 'top',
        duration: 600
      })
    }
  }

  scrollToActivitiesDivOnClick() {
    if (this.state.perspective !== 'menu-select-activities') {
      scrollToComponent(document.getElementById('activities-div'), {
        offset: 0,
        align: 'top',
        duration: 600
      })
    }
  }

  scrollToContactDivOnClick() {
    if (this.state.perspective !== 'menu-select-contact') {
      scrollToComponent(document.getElementById('contact-div'), {
        offset: 0,
        align: 'top',
        duration: 600
      })
    }
  }

  render() {
    //Page Menu stuff "Dormant" State ClassNames
    let menuSelectionClassName = 'menu-selection'

    let menuIntroClassName = 'menu-select-intro'
    let menuAboutClassName = 'menu-select-about'
    let menuSkillsClassName = 'menu-select-skills'
    let menuProjectsClassName = 'menu-select-projects'
    let menuActivitiesClassName = 'menu-select-activities'
    let menuContactClassName = 'menu-select-contact'

    //Div Overlay "Dormant" ClassNames
    let splashDivOverlayClassName = 'splash-div-overlay'

    if (this.state.perspective === menuIntroClassName) {
      menuIntroClassName += '-current'
    }
    if (this.state.perspective === menuAboutClassName) {
      menuAboutClassName += '-current'
    }
    if (this.state.perspective === menuSkillsClassName) {
      menuSkillsClassName += '-current'
    }
    if (this.state.perspective === menuProjectsClassName) {
      menuProjectsClassName += '-current'
    }
    if (this.state.perspective === menuActivitiesClassName) {
      menuActivitiesClassName += '-current'
    }
    if (this.state.perspective === menuContactClassName) {
      menuContactClassName += '-current'
    }

    return (
      <div className="Home" onLoad={this.componentDidMount}>
        {/* Splash Div */}
        <div id="screen-top-position" />
        <div
          className={splashDivOverlayClassName}
          onClick={this.readScreenHeight.bind(this)}
        >
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
              className={menuContactClassName}
              onClick={this.scrollToContactDivOnClick.bind(this)}
            >
              <div>Contact Me</div>
            </div>
          </div>
        </div>

        <div className="page-div" id="splash-div" />
        <div className="page-div" id="about-me-div" />
        <div className="page-div" id="skills-div" />
        <div className="page-div" id="projects-div" />
        <div className="page-div" id="contact-div" />
      </div>
    )
  }
}

export default Home
