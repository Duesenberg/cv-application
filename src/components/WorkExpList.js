import React, { Component } from 'react';
import DetailsList from './DetailsList';

class WorkExpList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      workEdited: null
    }

    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.setEditedWork = this.setEditedWork.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
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

  render() {
    const { application, deleteWork, editWork } = this.props;

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

              <DetailsList details={experience.workDetails} />
            </div> 
          )
        })}
      </div>
    )
  }
}

export default WorkExpList;
