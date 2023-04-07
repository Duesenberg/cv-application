import React, { Component } from 'react';
import DetailsList from './DetailsList';
import AddDetailPopUp from './AddDetailPopUp';

class WorkExpList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      workEdited: null,
      popUpVisible: false,
      workIdForDetail: null
    }

    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.setEditedWork = this.setEditedWork.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.showPopUp = this.showPopUp.bind(this);
    this.hidePopUp = this.hidePopUp.bind(this);
    this.setWorkIdForDetail = this.setWorkIdForDetail.bind(this);
    this.handleAddDetailClick = this.handleAddDetailClick.bind(this);
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

  setWorkIdForDetail(e) {
    const workIdForDetail = e.target.dataset.id;
    this.setState({workIdForDetail: workIdForDetail});
  }

  showPopUp() {
    this.setState({
      popUpVisible: true,
    });
  }

  handleAddDetailClick(e) {
    this.setWorkIdForDetail(e);
    this.showPopUp();
  }

  hidePopUp() {
    this.setState({
      popUpVisible: false,
    })
  }

  render() {
    const { application, deleteWork, editWork, detailAdd, 
      addDetailInfo, detailEdit, deleteDetail } = this.props;

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
                    data-expid={experience.id} 
                    placeholder={experience.company} required />
                  <input 
                    type='text' name='position' id='position' 
                    onChange={editWork} data-apid={application.id} 
                    data-expid={experience.id}
                    placeholder={experience.position} required />
                  <input 
                    type='date' name='startYear' id='startYear' 
                    onChange={editWork} data-apid={application.id} 
                    data-expid={experience.id}
                    placeholder={experience.startYear} required />
                  <input 
                    type='date' name='endYear' id='endYear' 
                    onChange={editWork} data-apid={application.id} 
                    data-expid={experience.id}
                    placeholder={experience.endYear} required />

                  <button 
                    className='edit' data-id={experience.id}
                    onClick={this.handleEditClick}>Edit</button>
                </div> :
                <div className='position-box'>
                  <div className='position'>
                    {experience.company + ', ' + experience.position + 
                    '(' + experience.startYear + ' - ' + experience.endYear + ')'}
                  </div>
                  <div className='buttons'>
                    <button 
                      className='edit' data-id={experience.id}
                      onClick={this.handleEditClick}>Edit</button>
                    <button 
                      className='remove' id={application.id} 
                      data-id={experience.id} onClick={deleteWork}>Remove</button>
                    </div>
                </div>
              }

              {(this.state.popUpVisible && 
                this.state.workIdForDetail === experience.id) ?
              <AddDetailPopUp 
              hidePopUp={this.hidePopUp} detailAdd={detailAdd}
              application={application} experience={experience} 
              addDetailInfo={addDetailInfo}/> : null}

              {(this.state.popUpVisible && 
                this.state.workIdForDetail === experience.id) ? null:
                <button
                className='add-detail' data-id={experience.id}
                onClick={this.handleAddDetailClick}>Add Work Detail</button>
              }

              <DetailsList 
                application={application} experience={experience}
                detailEdit={detailEdit} deleteDetail={deleteDetail} />
            </div> 
          )
        })}
      </div>
    )
  }
}

export default WorkExpList;
