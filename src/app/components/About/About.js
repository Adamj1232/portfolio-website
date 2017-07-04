
import React, { Component } from 'react';
import style from './About.css'

// import WhoAmI from './WhoAmI';
import Skills from '../Skills/Skills';

const About = () => {

  return (
    <section id='about'>
      <article className='who-am-i-section'>
        <h2>About</h2>
        <div className='about-container'>
        <p className='about1'>
          My name is Adam Carpenter and I am a creative problem-solver dedicated to producing clean, modular, testable code with a insatiable appetite for knowledge. I strive to encourage communication, creativity, and critical thinking in those that surround me.
          <br/>
          <br/>
          After 10 years of working as a traveling musician and a few years in the telecommunications industry I became a software developer to merge my passion for creativity, technology and problem solving into a sustainable career in a progressive industry. I have a passion for creating websites and applications that are intuitive, accessible, and which make peoples lives better.
        </p>
        <br/>
        <br/>
        <p className='about2'>
          My strong communication and organizational skills make me an enthusiastic and valuable team member. My background in philosophy and as a working musician has instilled a passion for critical thinking, problem solving and team working which I hope to encourage in others through my work.
          <br/>
          <br/>
          Previous experience includes racking, stacking and cabling within data centers as well as installing, troubleshooting and training on desktop/laptop computers, network devices and security systems.
          <br/>
          <br/>
          An all around music lover, musician, fisherman and outdoor enthusiast.
          <br/>
          Read more about me via my
          <a href='https://www.linkedin.com/in/adam-joseph-carpenter/' target='_blank' rel="noopener noreferrer">
            &nbsp;LinkedIn&nbsp;
          </a>
          or contact me directly
          <a href='mailto:adamcarpenter86@gmail.com'>
            &nbsp;here
          </a>.
        </p>
        </div>
      </article>
      <Skills />
    </section>
  );
};

// <WhoAmI />

export default About;
