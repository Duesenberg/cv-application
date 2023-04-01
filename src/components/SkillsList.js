import React, { Component } from 'react';

class SkillsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      skillEdited: null,
    }

    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.setEditedSkill = this.setEditedSkill.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  toggleEditMode() {
    this.state.editMode === false ?
      this.setState({editMode: true}) :
      this.setState({editMode: false});
  }

  setEditedSkill(e) {
    const skillEdited = e.target.dataset.id;
    this.setState({skillEdited: skillEdited});
  }

  handleEditClick(e) {
    this.toggleEditMode();
    this.setEditedSkill(e);
  }

  render() {
    const { application, editSkill, deleteSkill } = this.props;

    return (
      <div className='skills-list'>
        {application.skills.skills.map((skill) => {
          return (
          <div 
            className='skill'
            key={skill.id}>
              {(skill.id === this.state.skillEdited 
                && this.state.editMode === true) ?
              <input 
                type='text' name='skill' id='skill' 
                placeholder={skill.description} onChange={editSkill}
                data-apid={application.id} data-skilid={skill.id} required /> :
              <p className='text'>{skill.description}</p>}
              <button 
                className='edit' data-id={skill.id}
                onClick={this.handleEditClick}>Edit</button>
              <button 
                className='remove' data-apid={application.id} 
                data-skilid={skill.id} onClick={deleteSkill}>Remove</button>
          </div>
          )
        })}
      </div>
    )
  }
}

export default SkillsList;
