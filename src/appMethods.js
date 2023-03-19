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

function selectCV (e) {
  this.setState({
    selectedApplication: e.target.dataset.id
  })
}

export { addTitle, addCV, deleteApplication, selectCV };