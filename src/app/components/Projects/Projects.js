import React from 'react';
import ProjectsData from './Projects-Data.js'
import style from './Projects.css'

const Projects = ({ toggleModal }) => {

  const allProjects = ProjectsData.map((project, i) => {
    const { title, image, gitHubRepo, siteURL, icons } = project;
    console.log(image)
    return (
      <article className='each-project' key={i}>
        <img
          className='project-image'
          src={require( `${image}` )}
          alt={`Picture of my ${title} project`}
        />
        <div className='article-layer'>
          <h3>{ title }</h3>
          <a href={ gitHubRepo } target='_blank' title='Github Repo'>
            <img
              className='project-icons'
              src={require( `${icons.git}` )}
              alt='icon of github cat'
            />
          </a>
          <button
            className='project-button'
            onClick={ () => toggleModal(title) }>
            More Details
          </button>
          <a href={ siteURL } target='_blank' title='Website'>
            <img
              className='project-icons'
              src={require( `${icons.site}` )}
              alt='icon of laptop'
            />
          </a>
        </div>
      </article>
    );
  });

  return (
    <section id='projects'>
      <h2>Projects</h2>
      <div className='projects-wrapper'>
      { allProjects }
      </div>
    </section>
  );
};

export default Projects;
