import React, { Component } from 'react';

class SkillSection extends Component {
  render() {
    const { skills } = this.props;

    return (
      <div className='skill-section'>
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

export default SkillSection;
