import React, { Component } from 'react';
import AddSkillPopUp from './AddSkillPopUp';
import SkillsList from './SkillsList';

class SkillSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popUpVisible: false
    }

    this.showPopUp = this.showPopUp.bind(this);
    this.hidePopUp = this.hidePopUp.bind(this);
  }

  showPopUp() {
    this.setState({
      popUpVisible: true,
    });
  }

  hidePopUp() {
    this.setState({
      popUpVisible: false,
    })
  }

  render() {
    const { application, skills } = this.props;

    return (
      <div className='skill-section'>
        <p className='name'>Skills</p>
        {this.state.popUpVisible ?
        <AddSkillPopUp 
        application={application} hidePopUp={this.hidePopUp} /> :null}

        {this.state.popUpVisible ? null:
        <button 
          className='add-skill' onClick={this.showPopUp}>Add Skill</button>}

        <SkillsList application={application} skills={skills} />
      </div>
    )
  }
}

export default SkillSection;
