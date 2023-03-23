import React, { Component } from 'react';

class ProjectsSection extends Component {
  render() {
    const { projects } = this.props;

    return (
      <div className='project-section'>
        {projects.projects.map((project) => {
          <div 
            className='project'
            key={project.id}>
              <p className='text'>{project.description}</p>
              <button className='edit'>Edit</button>
              <button className='remove'>Remove</button>
          </div>
        })}
      </div>
    )
  }
}

export default ProjectsSection;
