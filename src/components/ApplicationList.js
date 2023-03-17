import React, { Component } from 'react';

class ApplicationList extends Component {
  render() {
    const { applications, deleteApplication, selectCV } = this.props;

    return(
      <div className='application-list'>
        {applications.map((application) => {
          return (
            <div 
              key={application.id} 
              className='application'>
                <button 
                  className='title'
                  data-id={application.id}
                  onClick={selectCV}>{application.title}</button>
                <button 
                  className='remove-button'
                  data-id={application.id}
                  onClick={deleteApplication}>Remove</button>
            </div>
          );
        })}
      </div>
    )
  }
}

export default ApplicationList;
