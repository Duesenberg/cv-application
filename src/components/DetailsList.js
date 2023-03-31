import React, { Component } from 'react';

class DetailsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      detailEdited: null
    }

    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.setEditedDetail = this.setEditedDetail.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  toggleEditMode() {
    this.state.editMode === false ?
      this.setState({editMode: true}) :
      this.setState({editMode: false});
  }

  setEditedDetail(e) {
    const detailEdited = e.target.dataset.id;
    this.setState({detailEdited: detailEdited});
  }

  handleEditClick(e) {
    this.toggleEditMode();
    this.setEditedDetail(e);
  }
 render() {
  const { application, experience, detailEdit, deleteDetail } = this.props;

  return (
    <div className='details-list'>
      {experience.workDetails?.map((detail) => {
        return (
          <div 
            key={detail.id}
            className='detail'>
              {(this.state.editMode === true 
                && this.state.detailEdited === detail.id) ?
              <input 
                type='text' name='detail' id='detail' 
                data-apid={application.id} data-expid={experience.id}
                data-detid={detail.id} onChange={detailEdit} 
                placeholder={detail.description} required /> :
              <p className='text'>{detail.description}</p>
              }
              
              <button 
                className='edit' data-id={detail.id}
                onClick={this.handleEditClick}>Edit</button>

              <button 
                className='remove' data-apid={application.id}
                data-expid={experience.id} data-detid={detail.id}
                onClick={deleteDetail}>Remove</button>
          </div>
        )
      })}
    </div>
  )
 }
}

export default DetailsList;
