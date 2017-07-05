import React from 'react';
import './ProjectDetails.css'

const ProjectDetails = ({ title, description, image, techUsed, toggleModal }) => {
  const listedTech = techUsed.map((tech, i) =>
    <li key={i}>{tech}</li>,
  );
  return (
    <section className='project-details'>
      <h2 className='project-detail-header'>{ title }</h2>
      <img
        className='project-detail-image'src={require( `${image}` )}
        alt={`Screenshot of my ${title} project`}
      />
      <p className='project-detail-desc'>{ description }</p>
      <div className='project-detail-tech'>
        <h3>Technologies Used</h3>
        <ul>
          { listedTech }
        </ul>
      </div>
      <button
        className='home-button'
        onClick={ () => toggleModal() }>
        X
      </button>
    </section>
  );
};

export default ProjectDetails;
