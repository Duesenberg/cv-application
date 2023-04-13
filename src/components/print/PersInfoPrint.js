import React, { Component } from 'react';

class PersInfoPrint extends Component {
  render() {
    const { application } = this.props;

    return (
      <div className='personal-info-section'>
        <div className='name-address'>
          <p className='content'>{application.personalInfo.fullName}</p>
          <p className='content'>{application.personalInfo.address}</p>
        </div>
        <div className='dob-phone-mail'>
          <p className='content'>DOB: {application.personalInfo.dateOfBirth}</p>
          <p className='content'>tel.: {application.personalInfo.phoneNumber}</p>
          <p className='content'>e-mail: {application.personalInfo.email}</p>
        </div>
      </div>
    )
  }
}

export default PersInfoPrint;