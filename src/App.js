/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import './styles/App.css';
import { addCV, addTitle } from './appMethods';
import uniqid from "uniqid";

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
  }
  
  render() {
    return (
      <div className="screen">
        <Header />
        <Sidebar 
          titleChange={this.addTitle}
          addApplication={this.addCV}
        />
        <Main />
      </div>
    );
  }
}

export default App;
