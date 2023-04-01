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
          id: this.state.application.workExperience.experience.id,
          workDetails: []
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



export { addTitle, addCV, deleteApplication, selectCV };