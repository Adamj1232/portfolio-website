import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import Resume from '../Resume/Resume'
// import MainContent from '../MainContent/MainContent'
// import Projects from '../Projects/Projects'
// import Headline from '../Headline/Headline'
import NavBar from './NavBar/NavBar'
// import AboutMe from '../AboutMe/AboutMe'
// import Contact from '../Contact/Contact'
import style from '../styles/index.css';
class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="App">
        <NavBar/>
        <section id='name'>
          <h1> Adam Carpenter </h1>
          <h3>Software Developer</h3>
        </section>
      </div>
    );
  }
}
//  <Headline/>
//  <Switch>
//  <Route path="/aboutme" render = {(history) => {
//    return <AboutMe history = {history}/>}}/>
//   <Route path="/resume" render = {(history) => {
//     return <Resume history = {history}/>}}/>
//   <Route path="/projects" render = {(history) => {
//     return <Projects history = {history}/>}}/>
//   <Route path="/contact" render = {(history) => {
//     return <Contact history = {history}/>}}/>
//   <Route path="/" render = {(history) => {
//     return <MainContent history = {history}/>}}/>
//  </Switch>

export default App;
