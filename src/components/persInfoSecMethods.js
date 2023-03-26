//methods used in App.js for the personal info section in Main.js
//and in PersInfoSection.js component

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
    case "homeAddress": application.personalInfo.address = e.target.value;
      break;
    case "telNum": application.personalInfo.phoneNumber = e.target.value;
      break;
    case "mail": application.personalInfo.email = e.target.value;
      break;
    case "dob": application.personalInfo.dateOfBirth = e.target.value;
      break;
    default:
      break;
  }
  
  applications[index] = application;
  this.setState({applications: applications});
}

function toggleEditState(e) {
  //stop editing all other elements once you click on one
  this.setState({
    nameEdit: false,
    addressEdit: false,
    phoneEdit: false,
    emailEdit: false,
    dobEdit: false
  })

  //data-id property of the clicked button
  const id = e.target.dataset.id;

  //depending on data-id change the corresponding state
  switch (id) {
    case "fullName":
      this.state.nameEdit === false ?
      this.setState({nameEdit: true}) :
      this.setState({nameEdit: false});
      break;
    case "homeAddress":
      this.state.addressEdit === false ?
      this.setState({addressEdit: true}) :
      this.setState({addressEdit: false});
      break;
    case "telNum":
      this.state.phoneEdit === false ?
      this.setState({phoneEdit: true}) :
      this.setState({phoneEdit: false});
      break;
    case "mail":
      this.state.emailEdit === false ?
      this.setState({emailEdit: true}) :
      this.setState({emailEdit: false});
      break;
    case "dob":
      this.state.dobEdit === false ?
      this.setState({dobEdit: true}) :
      this.setState({dobEdit: false});
      break;
    default:
      break;
  }
}



export { editPersonalInfo, toggleEditState };