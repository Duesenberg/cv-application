import React, { Component } from 'react';
import DetailsList from './DetailsList';

class WorkExpList extends Component {
  render() {
    const { experiences } = this.props;

    return (
      <div className='experiences'>
        {experiences.map((experience) => {
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
              <button className='remove'>Remove</button>

              <DetailsList details={experience.workDetails} />
            </div> 
          )
        })}
      </div>
    )
  }
}

export default WorkExpList;
