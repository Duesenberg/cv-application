import React, { Component } from 'react';
import DegreeList from './DegreeList';

class EduSection extends Component {
  render() {
    const { application } = this.props;

    return (
      <div className='education-section'>
        <p className='name'>Education</p>
        <DegreeList degrees={application.education.degrees} />
        <button className='edit'>Edit</button>
      </div>
    )
  }
}

export default EduSection;
