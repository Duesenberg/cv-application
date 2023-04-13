import React, { Component } from 'react';
import SkillsPrint from './SkillsPrint';

class SkillPrint extends Component {
  render() {
    const { application } = this.props;

    return (
      <div className='skill-section'>
        <p className='name'>SKILLS</p>
        <SkillsPrint application={application} />
      </div>
    )
  }
}

export default SkillPrint;
