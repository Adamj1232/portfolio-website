import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Scroll from 'react-scroll';

// import Projects from '../Projects/Projects'
// import Headline from '../Headline/Headline'
// import About from '../About/About'
// import Contact from '../Contact/Contact'
import style from '../styles/index.css';
import githubLogo from './../styles/images/github-logo'
import linkedinLogo from './../styles/images/linkedin-logo'

class App extends Component {
  constructor(props){
    super(props)
  }

  scrollToAbout() {
    Scroll.scroller.scrollTo('about', {
      durcation: 1000,
      delay: 250,
      smooth: true,
    });
  }

  render() {
    return (
      <div className="App">
        <section id='name'>
          <h1> adam carpenter<span id='period'>.</span> </h1>
          <h2 id='title'>Software Developer</h2>
        </section>
        <button
        id='scroll-btn'
        type='button'
        onClick={ () => this.scrollToAbout() }>
        </button>
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
