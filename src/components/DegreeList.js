import React, { Component } from 'react';

class DegreeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      degreeEdited: null
    }

    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.setEditedDegree = this.setEditedDegree.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  toggleEditMode() {
    this.state.editMode === false ?
      this.setState({editMode: true}) :
      this.setState({editMode: false});
  }

  setEditedDegree(e) {
    const degreeEdited = e.target.dataset.id;
    this.setState({degreeEdited: degreeEdited});
  }

  handleEditClick(e) {
    this.toggleEditMode();
    this.setEditedDegree(e);
  }

  render() {
    const { application, editDegree } = this.props;

    return (
      <div className='degrees'>
        {application.education.degrees.map((degree) => {
          return (
          <div
            key={degree.id}
            className='degree'>
              {(this.state.editMode === true && this.state.degreeEdited === degree.id) ?
                <div className='edit-box'>
                  <input 
                    type='text' name='fullName' id='fullName' 
                    onChange={editDegree} required />, 
                  <input 
                    type='text' name='institution' id='institution' 
                    onChange={editDegree} required />, 
                  <input 
                    type='date' name='startYear' id='startYear' 
                    onChange={editDegree} required />-
                  <input 
                    type='date' name='endYear' id='endYear' 
                    onChange={editDegree} required />
                </div> :
                <p className='text'>
                  {degree.name + ', ' + degree.institution + ', ' 
                  + degree.startYear + '-' + degree.endYear}
                </p>
                }
              <button 
                className='edit' data-id={degree.id} 
                onClick={this.handleEditClick}>Edit</button>
              <button data-id={degree.id} className='remove'>Remove</button>
          </div>)   
        })}
      </div>
    )
  }
}

export default DegreeList;
