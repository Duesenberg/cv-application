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
        <input type='text' name='title' id='title' onChange={titleAdd} required />
        <button className='create-application' type='submit'>ADD</button>
        <button className='hide-popup' onClick={hidePopUp}>CANCEL</button>
      </form>
    );
  }
}

export default AddCVPopUp;
