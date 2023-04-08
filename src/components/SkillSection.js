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
    const { application, addSkill, addSkillInfo, editSkill,
      deleteSkill } = this.props;

    return (
      <div className='skill-section'>
        <p className='name'>Skills</p>
        {this.state.popUpVisible ?
        <AddSkillPopUp 
        application={application} hidePopUp={this.hidePopUp}
        addSkill={addSkill} addSkillInfo={addSkillInfo} /> :null}

        <button 
          className='add-skill' onClick={this.showPopUp}>Add</button>

        <SkillsList 
          application={application} editSkill={editSkill}
          deleteSkill={deleteSkill} />
      </div>
    )
  }
}

export default SkillSection;
