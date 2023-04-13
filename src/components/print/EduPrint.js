import React, { Component } from 'react';
import DegreesPrint from './DegreesPrint';

class EduPrint extends Component {
  render() {
    const { application } = this.props;

    return (
      <div className='education-section'>
        <p className='name'>EDUCATION</p>
        <DegreesPrint application={application} />
      </div>
    )
  }
}

export default EduPrint;
