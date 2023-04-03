import React, { Component } from 'react';

class ApplicationList extends Component {
  render() {
    const { applications, deleteApplication, selectApplication } = this.props;

    return(
      <div className='application-list'>
        <p className='list-title'>Applications:</p>
        {applications.map((application) => {
          return (
            <div 
              key={application.id} 
              className='application'>
                <button 
                  className='title'
                  data-id={application.id}
                  onClick={selectApplication}>{application.title}</button>
                <button 
                  className='remove-button'
                  id={application.id}
                  onClick={deleteApplication}>X</button>
            </div>
          );
        })}
      </div>
    )
  }
}

export default ApplicationList;
