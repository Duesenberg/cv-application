import React, { Component } from 'react';

class ProjectsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      projectEdited: null,
    }

    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.setEditedProject = this.setEditedProject.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  toggleEditMode() {
    this.state.editMode === false ?
      this.setState({editMode: true}) :
      this.setState({editMode: false});
  }

  setEditedProject(e) {
    const projectEdited = e.target.dataset.id;
    this.setState({projectEdited: projectEdited});
  }

  handleEditClick(e) {
    this.toggleEditMode();
    this.setEditedProject(e);
  }

  render() {
    const { application, editProject, deleteProject } = this.props;

    return (
      <div className='projects-list'>
        {application.projects.projects.map((project) => {
          return (
          <div 
            className='project'
            key={project.id}>
              {(project.id === this.state.projectEdited 
                && this.state.editMode === true) ?
              <input 
                type='text' name='project' id='project' 
                placeholder={project.description} onChange={editProject}
                data-apid={application.id} data-projid={project.id} required /> :
              <p className='text'>{project.description}</p>}
              <button 
                className='edit' data-id={project.id}
                onClick={this.handleEditClick}>Edit</button>
              <button 
                className='remove' data-apid={application.id} 
                data-projid={project.id} onClick={deleteProject}>Remove</button>
          </div>
          )
        })}
      </div>
    )
  }
}

export default ProjectsList;
