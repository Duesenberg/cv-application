import React, { Component } from 'react';

class ProjListPrint extends Component {
  render() {
    const { application } = this.props;

    return (
      <div className='projects-list'>
        {application.projects.projects.map((project) => {
          return (
          <div className='project' key={project.id}>
            <p className='text'>{project.description}</p>
          </div>
          )
        })}
      </div>
    )
  }
}

export default ProjListPrint;
