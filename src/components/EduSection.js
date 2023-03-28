import React, { Component } from 'react';
import DegreeList from './DegreeList';
import AddDegreePopUp from './AddDegreePopUp';

class EduSection extends Component {
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
    const { application, addDegree, editDegree, addDegreeInfo } = this.props;

    return (
      <div className='education-section'>
        <p className='name'>Education</p>
        <button className='add-degree' onClick={this.showPopUp}>Add</button>
        {this.state.popUpVisible ?
        <AddDegreePopUp 
          application={application} addDegree={addDegree} 
          hidePopUp={this.hidePopUp} addDegreeInfo={addDegreeInfo} /> : null}
        <DegreeList application={application} />
      </div>
    )
  }
}

export default EduSection;
