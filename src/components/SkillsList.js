import React, { Component } from 'react';

class SkillsList extends Component {
  render() {
    const { application, skills } = this.props;

    return (
      <div className='skills-list'>
        {skills.skills.map((skill) => {
          <div 
            className='skill'
            key={skill.id}>
              <p className='text'>{skill.description}</p>
              <button className='edit'>Edit</button>
              <button className='remove'>Remove</button>
          </div>
        })}
      </div>
    )
  }
}

export default SkillsList;
