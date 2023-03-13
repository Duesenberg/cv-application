function addTitle(e) {
  this.setState({
    application: {
      title: e.target.value,
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
    }
  });

  console.log(this.state);
}

function addCV(e) {
  e.preventDefault();

  this.setState({
    applications: this.state.applications.concat(this.state.application),
    application: {
      title: '',
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
    }
  });

  console.log(this.state);
}

export { addTitle, addCV };