import uniqid from "uniqid";

//adds title when creating a new application
function addTitle(e) {
  this.setState({
    application: {
      title: e.target.value,
      id: this.state.application.id,
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
          id: this.state.application.education.degree.id
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
            id: this.state.application.workExperience.experience.workDetail.id
          },
          workDetails: [],
          id: this.state.application.workExperience.experience.id
        },
        experiences: []
      },
      skills: {
        skill: {
          description: '',
          id: this.state.application.skills.skill.id
        },
        skills: []
      },
      projects: {
        project: {
          description: '',
          id: this.state.application.projects.project.id
        },
        projects: []
      },
      leadership: {
        role: {
          description: '',
          id: this.state.application.leadership.role.id
        },
        roles: []
      },
      achievements: {
        item: {
          description: '',
          id: this.state.application.achievements.item.id
        },
        list: []
      }
    }
  });
}

function addCV(e) {
  e.preventDefault();

  this.setState({
    applications: this.state.applications.concat(this.state.application),
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
          workDetails: [],
          id: uniqid()
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
    }
  });
}

function deleteApplication (e) {
  this.setState({
    applications: this.state.applications.filter((application) => {
      if (application.id !== e.target.id) return application
      else return null
    })
  })
}

//changes the state of the selected cv
function selectCV (e) {
  this.setState({
    selectedApplication: e.target.dataset.id
  })
}

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

export { addTitle, addCV, deleteApplication, selectCV, editCVTitle };