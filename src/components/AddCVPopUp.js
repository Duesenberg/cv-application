import React, { Component } from 'react';

class AddCVPopUp extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { titleChange, addApplication, hidePopUp } = this.props;

    return (
      <form className='pop-up' onSubmit={addApplication}>
        <input type='text' name='title' id='title' onChange={titleChange} />
        <button className='create-application' type='submit'>Add</button>
        <button className='hide-popup' onClick={hidePopUp}>Hide</button>
      </form>
    );
  }
}

export default AddCVPopUp;
