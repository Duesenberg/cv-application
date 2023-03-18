import React, { Component } from 'react';

class TitleSection extends Component {
  render() {
    const { application } = this.props;
    
    return (
      <div className='title-section'>
        <p className='name'>CV Title</p>
        <p className='content'>{application.title}</p>
        <button className='edit'>Edit</button>
      </div>
    )
  }
}

export default TitleSection;