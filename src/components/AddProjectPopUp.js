import React, { Component } from 'react';

class AddProjectPopUp extends Component {
  handleSubmit = (e) => {
    this.props.addProject(e);
    this.props.hidePopUp();
  }

  render() {
    const { application, hidePopUp, addProject, addProjectInfo } = this.props;

    return (
      <form 
      className='pop-up' data-apid={application.id} 
      onSubmit={this.handleSubmit}>
       <input type='text' name='project' id='project' data-id={application.id} 
        onChange={addProjectInfo} required />
       <button className='create-project' type='submit'>Add</button>
       <button className='hide-popup' onClick={hidePopUp}>Hide</button>
     </form>
    )
  }
}

export default AddProjectPopUp;
