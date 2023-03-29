/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import uniqid from "uniqid";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import './styles/App.css';
import { addCV, addTitle, deleteApplication, selectCV } from './appMethods';
import editCVTitle from './components/titleSecMethods';
import { editPersonalInfo } from './components/persInfoSecMethods';
import { addDegree, editDegree, addDegreeInfo,
  deleteDegree } from './components/eduSecMethods';
import { addWork, addWorkInfo, deleteWork, editWork } from './components/workSecMethods';

class App extends Component {
  constructor() {
    super();

    this.state = {
      application: {
        title: '',
        id: uniqid(),
        personalInfo: {
          fullName: '',
          address: '',
          phoneNumber: '',
          email: '',
          dateOfBirth: ''
        },
        education: {
          degree: {
            name: '',
            institution: '',
            startYear: '',
            endYear: '',
            id: uniqid()
          },
          degrees: []
        },
        workExperience: {
          experience: {
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
          },
          experiences: []
        },
        skills: {
          skill: {
            description: '',
            id: uniqid()
          },
          skills: []
        },
        projects: {
          project: {
            description: '',
            id: uniqid()
          },
          projects: []
        },
        leadership: {
          role: {
            description: '',
            id: uniqid()
          },
          roles: []
        },
        achievements: {
          item: {
            description: '',
            id: uniqid()
          },
          list: []
        }
      },
      applications: [],
      selectedApplication: null
    }

    this.addTitle = addTitle.bind(this);
    this.addCV = addCV.bind(this);
    this.deleteApplication = deleteApplication.bind(this);
    this.selectCV = selectCV.bind(this);
    this.editCVTitle = editCVTitle.bind(this);
    this.editPersonalInfo = editPersonalInfo.bind(this);
    this.addDegree = addDegree.bind(this);
    this.editDegree = editDegree.bind(this);
    this.addDegreeInfo = addDegreeInfo.bind(this);
    this.deleteDegree = deleteDegree.bind(this);
    this.addWork = addWork.bind(this);
    this.addWorkInfo = addWorkInfo.bind(this);
    this.deleteWork = deleteWork.bind(this);
    this.editWork = editWork.bind(this);
  }
  
  render() {
    return (
      <div className="screen">
        <Header />
        <Sidebar 
          titleAdd={this.addTitle}
          addApplication={this.addCV}
          applications={this.state.applications}
          deleteApplication={this.deleteApplication}
          selectApplication={this.selectCV}
          />
        <Main
          state={this.state}
          applications={this.state.applications}
          editCVTitle={this.editCVTitle} editPersonalInfo={this.editPersonalInfo}
          addDegree={this.addDegree} editDegree={this.editDegree} 
          addDegreeInfo={this.addDegreeInfo} deleteDegree={this.deleteDegree}
          addWork={this.addWork} addWorkInfo={this.addWorkInfo} 
          deleteWork={this.deleteWork} editWork={this.editWork}
       />
      </div>
    );
  }
}

export default App;
