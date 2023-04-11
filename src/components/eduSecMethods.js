import uniqid from 'uniqid';
import moment from 'moment';

//adding info before creating new degree
function addDegreeInfo (e) {
  const index = this.state.applications.findIndex((application) => {
    return application.id === e.target.dataset.id;
  });
  const application = Object.assign({}, this.state.applications[index]);
  const targetId = e.target.id;
  const degree = application.education.degree;

  switch(targetId) {
    case "fullName": 
      degree.name = e.target.value;
      break;
    case "institution": 
      degree.institution = e.target.value;
      break;
    case "startYear":
      const formattedDateStart = moment(e.target.value).format('MMMM Do YYYY');
      degree.startYear = formattedDateStart;
      break;
    case "endYear":
      const formattedDateEnd = moment(e.target.value).format('MMMM Do YYYY');
      degree.endYear = formattedDateEnd;
      break;
    default: break;
  }
}

//adding a new degree to the list of degrees
function addDegree (e) {
  e.preventDefault();

  const index = this.state.applications.findIndex((application) => {
    return application.id === e.target.dataset.id;
  });
  const application = Object.assign({}, this.state.applications[index]);
  const applications = Object.assign([], this.state.applications);
  const degree = application.education.degree;

  application.education.degrees.push(degree);
  application.education.degree = {
    name: '',
    institution: '',
    startYear: '',
    endYear: '',
    id: uniqid()
  }

  applications[index] = application;
  this.setState({applications: applications});
}

//edit an existing degree
function editDegree(e) {
  const appIndex = this.state.applications.findIndex((application) => {
    return application.id === e.target.dataset.apid;
  });
  const application = Object.assign({}, this.state.applications[appIndex]);
  const applications = Object.assign([], this.state.applications);
  const degreeIndex = application.education.degrees.findIndex((degree) => {
    return degree.id === e.target.dataset.degid;
  });
  const targetId = e.target.id;

  switch(targetId) {
    case "fullName": 
      application.education.degrees[degreeIndex].name = e.target.value;
      break;
    case "institution": 
      application.education.degrees[degreeIndex].institution = e.target.value;
      break;
    case "startYear": 
      application.education.degrees[degreeIndex].startYear = e.target.value;
      break;
    case "endYear": 
      application.education.degrees[degreeIndex].endYear = e.target.value;
      break;
    default: break;
  }

  applications[appIndex] = application;
  this.setState({applications: applications});
}

//delete a degree from the list
function deleteDegree (e) {
  const appIndex = this.state.applications.findIndex((application) => {
    return application.id === e.target.id;
  });
  const application = Object.assign({}, this.state.applications[appIndex]);
  const applications = Object.assign([], this.state.applications);
  let degrees = application.education.degrees;

  degrees = degrees.filter((degree) => {
    if (degree.id === e.target.dataset.id) return null
    else return degree;
  });
  application.education.degrees = degrees;
  applications[appIndex] = application;
  this.setState({applications: applications});
}

export { addDegree, editDegree, addDegreeInfo, deleteDegree };
