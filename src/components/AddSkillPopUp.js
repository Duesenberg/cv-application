import React, { Component } from 'react';

class AddSkillPopUp extends Component {
  render() {
    const { application, hidePopUp } = this.props;

    return (
      <form 
      className='pop-up' data-apid={application.id} 
      onSubmit={this.handleSubmit}>
       <input type='text' name='skill' id='skill' data-id={application.id} 
        required />
       <button className='create-skill' type='submit'>Add</button>
       <button className='hide-popup' onClick={hidePopUp}>Hide</button>
     </form>
    )
  }
}

export default AddSkillPopUp;
