import React, { Component } from 'react';
import WorkExpList from './WorkExpList';
import AddWorkPopUp from './AddWorkPopUp';

class WorkSection extends Component {
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
    const { application, addWork, addWorkInfo, deleteWork, 
      editWork } = this.props;

    return (
      <div className='work-exp-section'>
        <p className='name'>Work Experience</p>
        {this.state.popUpVisible ?
        <AddWorkPopUp 
          application={application} hidePopUp={this.hidePopUp}
          addWork={addWork} addWorkInfo={addWorkInfo} /> : null}
        <button className='add-work-exp' onClick={this.showPopUp}>Add</button>
        <WorkExpList 
          application={application}
          deleteWork={deleteWork} editWork={editWork} />
      </div>
    )
  }
}

export default WorkSection;
