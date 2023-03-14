import React, { Component } from 'react';

class ApplicationList extends Component {
  render() {
    const { applications } = this.props;

    return(
      <div className='application-list'>
        {applications.map((application) => {
          return (
            <div className='application'>
              <button className='title'>{application.title}</button>
              <button className='remove-button'>Remove</button>
            </div>
          );
        })}
      </div>
    )
  }
}

export default ApplicationList;
