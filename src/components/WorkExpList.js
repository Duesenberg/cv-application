import React, { Component } from 'react';
import DetailsList from './DetailsList';
import AddDetailPopUp from './AddDetailPopUp';

class WorkExpList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      workEdited: null,
      popUpVisible: false
    }

    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.setEditedWork = this.setEditedWork.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.showPopUp = this.showPopUp.bind(this);
    this.hidePopUp = this.hidePopUp.bind(this);
  }

  toggleEditMode() {
    this.state.editMode === false ?
      this.setState({editMode: true}) :
      this.setState({editMode: false});
  }

  setEditedWork(e) {
    const workEdited = e.target.dataset.id;
    this.setState({workEdited: workEdited});
  }

  handleEditClick(e) {
    this.toggleEditMode();
    this.setEditedWork(e);
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
    const { application, deleteWork, editWork, detailAdd, 
      addDetailInfo } = this.props;

    return (
      <div className='experiences'>
        {application.workExperience.experiences.map((experience) => {
          return (
            <div
            key={experience.id}
            className='experience'>
              {(this.state.editMode === true && this.state.workEdited === experience.id) ?
                <div className='edit-box'>
                  <input 
                    type='text' name='company' id='company' 
                    onChange={editWork} data-apid={application.id} 
                    data-expid={experience.id} required />, 
                  <input 
                    type='text' name='position' id='position' 
                    onChange={editWork} data-apid={application.id} 
                    data-expid={experience.id} required />,  
                  <input 
                    type='date' name='startYear' id='startYear' 
                    onChange={editWork} data-apid={application.id} 
                    data-expid={experience.id} required />-
                  <input 
                    type='date' name='endYear' id='endYear' 
                    onChange={editWork} data-apid={application.id} 
                    data-expid={experience.id} required />
                </div> :
                <div 
                  className='position'>
                  {experience.company + ', ' + experience.position + 
                  '(' + experience.startYear + ' - ' + experience.endYear + ')'}
                </div>
              }

              <button 
                className='edit' data-id={experience.id}
                onClick={this.handleEditClick}>Edit</button>

              <button 
                className='remove' id={application.id} 
                data-id={experience.id} onClick={deleteWork}>Remove</button>

              {this.state.popUpVisible ?
              <AddDetailPopUp 
              hidePopUp={this.hidePopUp} detailAdd={detailAdd}
              application={application} experience={experience} 
              addDetailInfo={addDetailInfo}/> : null}

              {this.state.popUpVisible ? null:
                <button
                className='add-detail' 
                onClick={this.showPopUp}>Add Detail</button>
              }

              <DetailsList application={application} experience={experience} />
            </div> 
          )
        })}
      </div>
    )
  }
}

export default WorkExpList;
