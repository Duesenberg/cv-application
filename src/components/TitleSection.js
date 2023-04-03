import React, { Component } from 'react';

class TitleSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false
    }

    this.toggleEditMode = this.toggleEditMode.bind(this);
  }

  toggleEditMode() {
    this.state.editMode === false ?
      this.setState({editMode: true}) :
      this.setState({editMode: false});
  }

  render() {
    const { application, editCVTitle } = this.props;
    
    return (
      <div className='title-section'> 
        <p className='name'>CV Title</p>
        { this.state.editMode === false ?
          <p className='content'>{application.title}</p> :
          <input
            type='text' name='cvTitle' id='cvTitle'
            placeholder={application.title} data-id={application.id}
            onChange={editCVTitle} required /> }
        <button className='edit' onClick={this.toggleEditMode}>Edit</button>
      </div>
    )
  }
}

export default TitleSection;