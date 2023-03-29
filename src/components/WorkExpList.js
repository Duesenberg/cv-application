import React, { Component } from 'react';
import DetailsList from './DetailsList';

class WorkExpList extends Component {
  render() {
    const { application, deleteWork } = this.props;

    return (
      <div className='experiences'>
        {application.workExperience.experiences.map((experience) => {
          return (
            <div
            key={experience.id}
            className='experience'>
              <div 
                className='position'>
                  {experience.company + ', ' + experience.position + 
                  '(' + experience.startYear + ' - ' + experience.endYear + ')'}
              </div>
              <button className='edit'>Edit</button>
              <button 
                className='remove' id={application.id} 
                data-id={experience.id} onClick={deleteWork}>Remove</button>

              <DetailsList details={experience.workDetails} />
            </div> 
          )
        })}
      </div>
    )
  }
}

export default WorkExpList;
