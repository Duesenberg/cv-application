/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import '../styles/Sidebar.css';
import AddCVPopUp from './AddCVPopUp';

class Sidebar extends Component {
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
    const { 
      titleChange, application, applications, addApplication
    } = this.props;

    return (
      <div className="sidebar">
        <button className='add-application' onClick={this.showPopUp}>Add</button>
        {this.state.popUpVisible ? 
          <AddCVPopUp 
            hidePopUp={this.hidePopUp}
            titleChange={titleChange} 
            addApplication={addApplication}
          /> : null}
      </div>
    );
  }
}

export default Sidebar;
