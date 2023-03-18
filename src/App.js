/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import uniqid from "uniqid";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import './styles/App.css';
import { addCV, addTitle, deleteApplication } from './appMethods';

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
            endYear: ''
          },
          degrees: []
        },
        workExperience: {
          experience: {
            company: '',
            position: '',
            startYear: '',
            endYear: '',
            workDetail: '',
            workDetails: []
          },
          experiences: []
        },
        skills: {
          skill: '',
          skills: []
        },
        projects: {
          project: '',
          projects: []
        },
        leadership: {
          role: '',
          roles: []
        },
        achievements: {
          item: '',
          list: []
        }
      },
      applications: []
    }

    this.addTitle = addTitle.bind(this);
    this.addCV = addCV.bind(this);
    this.deleteApplication = deleteApplication.bind(this);
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
        />
        <Main />
      </div>
    );
  }
}

export default App;
