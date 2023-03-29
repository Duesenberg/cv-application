import React, { Component } from 'react';

class AddWorkPopUp extends Component {
  handleSubmit = (e) => {
    this.props.addWork(e);
    this.props.hidePopUp();
  }

  render() {
    const { application, hidePopUp, addWork, addWorkInfo } = this.props;

    return (
      <form className='add-experience' data-id={application.id} onSubmit={this.handleSubmit}>
        <input 
          type='text' name='company' id='company' onChange={addWorkInfo}
          data-id={application.id} required />, 
        <input 
          type='text' name='position' id='position' onChange={addWorkInfo} 
          data-id={application.id} required />,  
        <input 
          type='date' name='startYear' id='startYear' onChange={addWorkInfo} 
          data-id={application.id} required />-
        <input 
          type='date' name='endYear' id='endYear' onChange={addWorkInfo} 
          data-id={application.id} required />
        <button className='add-button' type='submit'>Add</button>
        <button className='close-button' onClick={hidePopUp}>Close</button>
      </form>
    )
  }
}

export default AddWorkPopUp;
