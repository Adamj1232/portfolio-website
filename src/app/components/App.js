import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Scroll from 'react-scroll';
import Modal from 'react-modal'

import Projects from './Projects/Projects.js'
import ProjectDetails from './Projects/ProjectDetails.js';
// import Headline from '../Headline/Headline'
import About from './About/About.js'
// import Contact from '../Contact/Contact'
import style from '../styles/index.css';
import githubLogo from './../styles/images/github-logo'
import linkedinLogo from './../styles/images/linkedin-logo'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalOpen: false,
      projectToDisplay: ''
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  scrollToAbout() {
    Scroll.scroller.scrollTo('about', {
      durcation: 1000,
      delay: 250,
      smooth: true,
    });
  }

  projectDetails() {
    const projectToDisplay = this.state.projects.find(project =>
      project.title === this.state.projectToDisplay,
    );
    return (
      <Modal
        className='project-modal'
        isOpen={ this.state.modalOpen }
        contentLabel='Project Details'
      >
        <ProjectDetails { ...projectToDisplay } toggleModal={ this.toggleModal } />
      </Modal>
    );
  }

  toggleModal(name) {
    if (!this.state.modalOpen) {
      this.setState({ modalOpen: true, projectToDisplay: name });
    } else {
      this.setState({ modalOpen: false, projectToDisplay: '' });
    }
  }


  render() {
    return (
      <div className="App">
        <section id='header'>
          <section id='name'>
            <h1> adam<span id='period'>.</span>carpenter </h1>
            <h2 id='title'>Software Developer</h2>
          </section>
          <button
            id='scroll-btn'
            type='button'
            onClick={ () => this.scrollToAbout() }>
          </button>
        </section>
        <About />
        <Projects toggleModal={ this.toggleModal } />
      </div>
    );
  }
}
// <div className="link-container">
//   <a href="https://github.com/Adamj1232">
//     <img src={githubLogo}/>
//   </a>
//   <a href="https://www.linkedin.com/in/adam-joseph-carpenter/">
//     <img src={linkedinLogo}/>
//   </a>
// </div>

export default App;
