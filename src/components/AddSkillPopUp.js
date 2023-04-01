import React, { Component } from 'react';

class AddSkillPopUp extends Component {
  handleSubmit = (e) => {
    this.props.addSkill(e);
    this.props.hidePopUp();
  }

  render() {
    const { application, hidePopUp, addSkill, addSkillInfo } = this.props;

    return (
      <form 
      className='pop-up' data-apid={application.id} 
      onSubmit={this.handleSubmit}>
       <input type='text' name='skill' id='skill' data-id={application.id} 
        onChange={addSkillInfo} required />
       <button className='create-skill' type='submit'>Add</button>
       <button className='hide-popup' onClick={hidePopUp}>Hide</button>
     </form>
    )
  }
}

export default AddSkillPopUp;
