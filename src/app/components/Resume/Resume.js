import React from 'react'
import './Resume.css'
import ResumeImg from '../../styles/images/Resume-edu.pdf'

const Resume = ({ toggleModal }) => {
  return(
    <section className='project-details'>
      <h2 className='project-detail-header'>
        Current Resume
      </h2>
      <iframe 
        src={ ResumeImg }
        title="Adam Carpenter Current Resume"
        align="top"
        height="620" width="100%"
        frameborder="0"
        scrolling="auto" target="Message">
      </iframe>
      <button
        className='home-button'
        onClick={ () => toggleModal() }>
        X
      </button>
    </section>
  )
}

export default Resume
