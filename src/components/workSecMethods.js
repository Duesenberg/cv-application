import uniqid from 'uniqid';

//adding info before creating new work exp
function addWorkInfo (e) {
  const index = this.state.applications.findIndex((application) => {
    return application.id === e.target.dataset.id;
  });
  const application = Object.assign({}, this.state.applications[index]);
  const targetId = e.target.id;
  const experience = application.workExperience.experience;

  switch(targetId) {
    case "company": 
      experience.company = e.target.value;
      break;
    case "position": 
      experience.position = e.target.value;
      break;
    case "startYear": 
      experience.startYear = e.target.value;
      break;
    case "endYear": 
      experience.endYear = e.target.value;
      break;
    default: break;
  }
}

//adding a new work exp to the list of experiences
function addWork (e) {
  e.preventDefault();

  const index = this.state.applications.findIndex((application) => {
    return application.id === e.target.dataset.id;
  });
  const application = Object.assign({}, this.state.applications[index]);
  const applications = Object.assign([], this.state.applications);
  const experience = application.workExperience.experience;

  application.workExperience.experiences.push(experience);
  application.workExperience.experience = {
    company: '',
    position: '',
    startYear: '',
    endYear: '',
    workDetail: {
      description: '',
      id: uniqid()
    },
    id: uniqid(),
    workDetails: []
  }

  applications[index] = application;
  this.setState({applications: applications});
}

//delete a degree from the list
function deleteWork (e) {
  const appIndex = this.state.applications.findIndex((application) => {
    return application.id === e.target.id;
  });
  const application = Object.assign({}, this.state.applications[appIndex]);
  const applications = Object.assign([], this.state.applications);
  let experiences = application.workExperience.experiences;

  experiences = experiences.filter((experience) => {
    if (experience.id === e.target.dataset.id) return null
    else return experience;
  });
  application.workExperience.experiences = experiences;
  applications[appIndex] = application;
  this.setState({applications: applications});
}

//edit an existing work item
function editWork(e) {
  const appIndex = this.state.applications.findIndex((application) => {
    return application.id === e.target.dataset.apid;
  });
  const application = Object.assign({}, this.state.applications[appIndex]);
  const applications = Object.assign([], this.state.applications);
  const workIndex = application.workExperience.experiences.findIndex((experience) => {
    return experience.id === e.target.dataset.expid;
  });
  const targetId = e.target.id;

  switch(targetId) {
    case "company": 
      application.workExperience.experiences[workIndex].company = e.target.value;
      break;
    case "position": 
      application.workExperience.experiences[workIndex].position = e.target.value;
      break;
    case "startYear": 
      application.workExperience.experiences[workIndex].startYear = e.target.value;
      break;
    case "endYear": 
      application.workExperience.experiences[workIndex].endYear = e.target.value;
      break;
    default: break;
  }

  applications[appIndex] = application;
  this.setState({applications: applications});
}

export { addWorkInfo, addWork, deleteWork, editWork };
