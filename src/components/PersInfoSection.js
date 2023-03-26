import React, { Component } from 'react';
import { toggleEditState } from './persInfoSecMethods';

class PersInfoSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameEdit: false,
      addressEdit: false,
      phoneEdit: false,
      emailEdit: false,
      dobEdit: false
    }

    this.toggleEditState = toggleEditState.bind(this);
  }

  render() {
    const { application, editPersonalInfo } = this.props;

    return (
      <div className='personal-info-section'>
        <p className='name'>Personal Information</p>

        <div className='full-name'>
          <p className='name'>Full Name</p>
          { this.state.nameEdit === false ?
            <p className='content'>{application.personalInfo.fullName}</p> :
            <input
              type='text' name='fullName' id='fullName'
              placeholder={application.personalInfo.fullName} data-id={application.id}
              onChange={editPersonalInfo} required /> }
          <button 
            className='edit' onClick={this.toggleEditState}
            data-id="fullName">Edit</button>
        </div>

        <div className='living-address'>
          <p className='name'>Residential Address</p>
          { this.state.addressEdit === false ?
            <p className='content'>{application.personalInfo.address}</p> :
            <input
              type='text' name='homeAddress' id='homeAddress'
              placeholder={application.personalInfo.address} data-id={application.id}
              onChange={editPersonalInfo} required /> }
          <button 
            className='edit' onClick={this.toggleEditState}
            data-id="homeAddress">Edit</button>
        </div>

        <div className='phone-number'>
          <p className='name'>Phone Number</p>
          { this.state.phoneEdit === false ?
            <p className='content'>{application.personalInfo.phoneNumber}</p> :
            <input
              type='tel' name='telNum' id='telNum'
              placeholder={application.personalInfo.phoneNumber} data-id={application.id}
              onChange={editPersonalInfo} required /> }
          <button 
            className='edit' onClick={this.toggleEditState}
            data-id="telNum">Edit</button>
        </div>

        <div className='email'>
          <p className='name'>E-Mail Address</p>
          { this.state.emailEdit === false ?
            <p className='content'>{application.personalInfo.email}</p> :
            <input
              type='email' name='mail' id='mail'
              placeholder={application.personalInfo.email} data-id={application.id}
              onChange={editPersonalInfo} required /> }
          <button 
            className='edit' onClick={this.toggleEditState}
            data-id="mail">Edit</button>
        </div>

        <div className='date-of-birth'>
          <p className='name'>Date of Birth</p>
          { this.state.dobEdit === false ?
            <p className='content'>{application.personalInfo.dateOfBirth}</p> :
            <input
              type='date' name='dob' id='dob'
              placeholder={application.personalInfo.dateOfBirth} data-id={application.id}
              onChange={editPersonalInfo} required /> }
          <button 
            className='edit' onClick={this.toggleEditState}
            data-id="dob">Edit</button>
        </div>
      </div>
    )
  }
}

export default PersInfoSection;