import uniqid from 'uniqid';

function addSkill (e) {
  e.preventDefault();

  const index = this.state.applications.findIndex((application) => {
    return application.id === e.target.dataset.apid;
  });
  const application = Object.assign({}, this.state.applications[index]);
  const applications = Object.assign([], this.state.applications);
  const skill = application.skills.skill;

  application.skills.skills.push(skill);
  application.skills.skill = {
    description: '',
    id: uniqid()
  }

  applications[index] = application;
  this.setState({applications: applications});
}

function addSkillInfo (e) {
  const index = this.state.applications.findIndex((application) => {
    return application.id === e.target.dataset.id;
  });
  const application = Object.assign({}, this.state.applications[index]);

  application.skills.skill.description = e.target.value;
}

function editSkill (e) {
  const appIndex = this.state.applications.findIndex((application) => {
    return application.id === e.target.dataset.apid;
  });
  const application = Object.assign({}, this.state.applications[appIndex]);
  const applications = Object.assign([], this.state.applications);
  const skillIndex = application.skills.skills.findIndex((skill) => {
    return skill.id === e.target.dataset.skilid;
  });

  application.skills.skills[skillIndex].description = e.target.value;
  applications[appIndex] = application;
  this.setState({applications: applications});
}

function deleteSkill (e) {
  const appIndex = this.state.applications.findIndex((application) => {
    return application.id === e.target.dataset.apid;
  });
  const application = Object.assign({}, this.state.applications[appIndex]);
  const applications = Object.assign([], this.state.applications);

  let skills = application.skills.skills;
  skills = skills.filter((skill) => {
    if (skill.id === e.target.dataset.skilid) return null;
    else return skill;
  });

  application.skills.skills = skills;
  applications[appIndex] = application;
  this.setState({applications: applications});
}

export { addSkill, addSkillInfo, editSkill, deleteSkill };
