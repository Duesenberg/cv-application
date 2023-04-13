import React, { Component } from 'react';
import ProjListPrint from './ProjListPrint';

class ProjSectPrint extends Component {
  render() {
    const { application } = this.props;

    return (
      <div className='project-section'>
        <p className='name'>PROJECTS</p>
        <ProjListPrint application={application} />
      </div>
    )
  }
}

export default ProjSectPrint;
