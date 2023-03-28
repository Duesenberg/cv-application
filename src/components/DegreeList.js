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

  render() {
    const { application } = this.props;

    return (
      <div className='degrees'>
        {application.education.degrees.map((degree) => {
          return (
          <div
            key={degree.id}
            className='degree'>
              {(this.state.editMode === true && this.state.degreeEdited === degree.id) ?
                <div className='edit-box'>
                  <input type='text' name='fullName' id='fullName' required />
                  + ', ' +
                  <input type='text' name='institution' id='institution' required />
                  + ', ' + 
                  <input type='date' name='startYear' id='startYear' required />
                  + '-' +
                  <input type='date' name='endYear' id='endYear' required />
                </div> :
                <p className='text'>
                  {degree.name + ', ' + degree.institution + ', ' 
                  + degree.startYear + '-' + degree.endYear}
                </p>
                }
              <button className='edit' onClick={this.toggleEditMode}>Edit</button>
              <button data-id={degree.id} className='remove'>Remove</button>
          </div>)   
        })}
      </div>
    )
  }
}

export default DegreeList;
