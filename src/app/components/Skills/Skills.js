import React, { Component } from 'react';
import SkillsList from './SkillsList.js';
import style from './Skills.css'

const Skills = () => {

  const allSkills = SkillsList.map((skill, i) => {
    const { title, skills, imageClass, imageAlt } = skill;
    const skillLists = skills.map((eachSkill, i) =>
        <span key={i}>{ eachSkill } </span>,
    );
    return (
      <div className='skills-block' key={i}>
        <div className={ imageClass }>
        </div>
        <div className='inner-skills'>
          <h4>{ title }</h4>
          { skillLists }
        </div>
      </div>
    );
  });
  return (
    <article className='skills-section'>
      <div className='skills-wrapper'>
        <h2>Things I Know</h2>
        { allSkills }
      </div>
    </article>
  );
};

export default Skills;
