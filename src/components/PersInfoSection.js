import React, { Component } from 'react';

class PersInfoSection extends Component {
  render() {
    const { application } = this.props;

    return (
      <div className='personal-info-section'>
        <p className='name'>Personal Information</p>

        <div className='full-name'>
          <p className='name'>Full Name</p>
          <p className='content'>{application.personalInfo.fullName}</p>
        </div>

        <div className='full-name'>
          <p className='name'>Residential Address</p>
          <p className='content'>{application.personalInfo.address}</p>
        </div>

        <div className='phone-number'>
          <p className='name'>Phone Number</p>
          <p className='content'>{application.personalInfo.phoneNumber}</p>
        </div>

        <div className='email'>
          <p className='name'>E-Mail Address</p>
          <p className='content'>{application.personalInfo.email}</p>
        </div>

        <div className='date-of-birth'>
          <p className='name'>Date of Birth</p>
          <p className='content'>{application.personalInfo.dateOfBirth}</p>
        </div>

        <button className='edit'>Edit</button>
      </div>
    )
  }
}

export default PersInfoSection;