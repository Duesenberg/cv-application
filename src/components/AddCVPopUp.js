import React, { Component } from 'react';

class AddCVPopUp extends Component {
   handleSubmit = (e) => {
    this.props.addApplication(e);
    this.props.hidePopUp();
  }

  render() {
    const { titleAdd, addApplication, hidePopUp } = this.props;

    return (
      <form className='pop-up' onSubmit={this.handleSubmit}>
        <input type='text' name='title' id='title' onChange={titleAdd} />
        <button className='create-application' type='submit'>Add</button>
        <button className='hide-popup' onClick={hidePopUp}>Hide</button>
      </form>
    );
  }
}

export default AddCVPopUp;
