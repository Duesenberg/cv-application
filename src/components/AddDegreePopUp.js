import React, { Component } from 'react';

class AddDegreePopUp extends Component {
  handleSubmit = (e) => {
    this.props.addDegree(e);
    this.props.hidePopUp();
  }

  render() {
    const { application, hidePopUp, addDegreeInfo, addDegree } = this.props;

    return (
      <form className='add-degree' data-id={application.id} onSubmit={this.handleSubmit}>
        <input 
          type='text' name='fullName' id='fullName' onChange={addDegreeInfo}
          data-id={application.id} required />, 
        <input 
          type='text' name='institution' id='institution' onChange={addDegreeInfo} 
          data-id={application.id} required />,  
        <input 
          type='date' name='startYear' id='startYear' onChange={addDegreeInfo} 
          data-id={application.id} required />-
        <input 
          type='date' name='endYear' id='endYear' onChange={addDegreeInfo} 
          data-id={application.id} required />
        <button className='add-button' type='submit'>Add</button>
        <button className='close-button' onClick={hidePopUp}>Close</button>
      </form>
    )
  }
}

export default AddDegreePopUp;
