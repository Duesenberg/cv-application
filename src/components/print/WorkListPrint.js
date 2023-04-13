import React, { Component } from 'react';
import DetListPrint from './DetListPrint';

class WorkListPrint extends Component {
  render() {
    const { application } = this.props;

    return (
      <div className='experiences'>
        {application.workExperience.experiences.map((experience) => {
          return (
            <div
            key={experience.id}
            className='experience'>
                <div className='position-box'>
                  <p className='position'>
                    {experience.company + ', ' + experience.position + ', ' +
                    '(' + experience.startYear + '-' + experience.endYear + ')'}
                  </p>
                </div>

              <DetListPrint application={application} experience={experience} />
            </div> 
          )
        })}
      </div>
    )
  }
}

export default WorkListPrint;
