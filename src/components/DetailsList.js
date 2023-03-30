import React, { Component } from 'react';

class DetailsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      detailEdited: null
    }

    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.setEditedWork = this.setEditedDetail.bind(this);
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
    this.setEditedWork(e);
  }
 render() {
  const { application, experience } = this.props;

  return (
    <div className='details-list'>
      {experience.workDetails?.map((detail) => {
        return (
          <div 
            key={detail.id}
            className='detail'>
              <p className='text'>{detail.description}</p>
              
              <button 
                className='edit' data-id={detail.id}
                onClick={this.handleEditClick}>Edit</button>

              <button className='remove'>Remove</button>
          </div>
        )
      })}
    </div>
  )
 }
}

export default DetailsList;
