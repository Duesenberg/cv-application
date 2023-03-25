//methods used in App.js for the title section of Main.js

function editCVTitle (e) {
  //find index of application, create copy of the application & applications arr
  const index = this.state.applications.findIndex((application) => {
    return application.id === e.target.dataset.id;
  });
  const application = Object.assign({}, this.state.applications[index]);
  const applications = Object.assign([], this.state.applications);

  //change title of selected application, assign it to applications & change state
  application.title = e.target.value;
  applications[index] = application;
  this.setState({applications: applications});

  console.log(this.state);
}

export default editCVTitle;
