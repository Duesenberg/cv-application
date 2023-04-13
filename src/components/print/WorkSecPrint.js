import React, { Component } from 'react';
import WorkListPrint from './WorkListPrint';

class WorkSecPrint extends Component {
  render() {
    const { application } = this.props;

    return (
      <div className='work-exp-section'>
        <p className='name'>WORK EXPERIENCE</p>
        <WorkListPrint application={application} />
      </div>
    )
  }
}

export default WorkSecPrint;
