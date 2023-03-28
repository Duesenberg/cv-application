import React, { Component } from 'react';
import WorkExpList from './WorkExpList';

class WorkSection extends Component {
  render() {
    const { application } = this.props;

    return (
      <div className='work-exp-section'>
        <p className='name'>Work Experience</p>
        <WorkExpList experiences={application.workExperience.experiences} />
      </div>
    )
  }
}

export default WorkSection;
