//methods used in App.js for the personal info section in Main.js

function editPersonalInfo (e) {
  const index = this.state.applications.findIndex((application) => {
    return application.id === e.target.dataset.id;
  });
  const application = Object.assign({}, this.state.applications[index]);
  const applications = Object.assign([], this.state.applications);
  const id = e.target.id;

  switch (id) {
    case "fullName": application.personalInfo.fullName = e.target.value;
      break;
  }
  
  applications[index] = application;
  this.setState({applications: applications});
}



export { editPersonalInfo };