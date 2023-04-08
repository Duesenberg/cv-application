import React, { Component } from 'react';
import AddProjectPopUp from './AddProjectPopUp';
import ProjectsList from './ProjectsList';

class ProjectsSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popUpVisible: false
    }

    this.showPopUp = this.showPopUp.bind(this);
    this.hidePopUp = this.hidePopUp.bind(this);
  }

  showPopUp() {
    this.setState({
      popUpVisible: true,
    });
  }

  hidePopUp() {
    this.setState({
      popUpVisible: false,
    })
  }

  render() {
    const { application, addProject, addProjectInfo, editProject,
    deleteProject } = this.props;

    return (
      <div className='project-section'>
        <p className='name'>Projects</p>
        {this.state.popUpVisible ?
        <AddProjectPopUp 
        application={application} hidePopUp={this.hidePopUp}
        addProject={addProject} addProjectInfo={addProjectInfo} /> :null}

        <button 
          className='add-project' onClick={this.showPopUp}>Add</button>

        <ProjectsList 
          application={application} editProject={editProject}
          deleteProject={deleteProject} />
      </div>
    )
  }
}

export default ProjectsSection;
