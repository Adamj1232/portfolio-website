import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
import Scroll from 'react-scroll';
import Modal from 'react-modal'

import '../styles/index.css';
import ProjectsData from './Projects/Projects-Data.js'
import Projects from './Projects/Projects.js'
import ProjectDetails from './Projects/ProjectDetails.js';
import About from './About/About.js'
import Footer from './Footer/Footer.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalOpen: false,
      projectToDisplay: ''
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToAbout() {
    Scroll.scroller.scrollTo('about', {
      durcation: 1000,
      delay: 250,
      smooth: true,
    });
  }

  scrollToTop() {
    Scroll.animateScroll.scrollToTop();
  }

  projectDetails() {
    const projectToDisplay = ProjectsData.find(project =>
      project.title === this.state.projectToDisplay,
    );
    return (
      <Modal
        className='project-modal'
        isOpen={ this.state.modalOpen }
        contentLabel='Project Details'
      >
        <ProjectDetails
          { ...projectToDisplay }
          toggleModal={ this.toggleModal }
        />
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
        { this.projectDetails() }
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
        <Footer scrollToTop={ this.scrollToTop }/>
      </div>
    );
  }
}


export default App;
