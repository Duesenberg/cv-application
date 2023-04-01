import uniqid from 'uniqid';

function addProject (e) {
  e.preventDefault();

  const index = this.state.applications.findIndex((application) => {
    return application.id === e.target.dataset.apid;
  });
  const application = Object.assign({}, this.state.applications[index]);
  const applications = Object.assign([], this.state.applications);
  const project = application.projects.project;

  application.projects.projects.push(project);
  application.projects.project = {
    description: '',
    id: uniqid()
  }

  applications[index] = application;
  this.setState({applications: applications});
}

function addProjectInfo (e) {
  const index = this.state.applications.findIndex((application) => {
    return application.id === e.target.dataset.id;
  });
  const application = Object.assign({}, this.state.applications[index]);

  application.projects.project.description = e.target.value;
}

function editProject (e) {
  const appIndex = this.state.applications.findIndex((application) => {
    return application.id === e.target.dataset.apid;
  });
  const application = Object.assign({}, this.state.applications[appIndex]);
  const applications = Object.assign([], this.state.applications);
  const projectIndex = application.projects.projects.findIndex((project) => {
    return project.id === e.target.dataset.projid;
  });

  application.projects.projects[projectIndex].description = e.target.value;
  applications[appIndex] = application;
  this.setState({applications: applications});
}

function deleteProject (e) {
  const appIndex = this.state.applications.findIndex((application) => {
    return application.id === e.target.dataset.apid;
  });
  const application = Object.assign({}, this.state.applications[appIndex]);
  const applications = Object.assign([], this.state.applications);

  let projects = application.projects.projects;
  projects = projects.filter((project) => {
    if (project.id === e.target.dataset.projid) return null;
    else return project;
  });

  application.projects.projects = projects;
  applications[appIndex] = application;
  this.setState({applications: applications});
}

export { addProject, addProjectInfo, editProject, deleteProject };
