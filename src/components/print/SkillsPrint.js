import React, { Component } from 'react';

class SkillsPrint extends Component {
  render() {
    const { application } = this.props;

    return (
      <div className='skills-list'>
        {application.skills.skills.map((skill) => {
          return (
          <div className='skill' key={skill.id}>
            <p className='text'>{skill.description}</p>
          </div>
          )
        })}
      </div>
    )
  }
}

export default SkillsPrint;
