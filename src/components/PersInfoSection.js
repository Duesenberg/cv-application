import React, { Component } from 'react';

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

    this.toggleNameEdit = this.toggleNameEdit.bind(this);
    this.toggleaAdressEdit = this.toggleaAdressEdit.bind(this);
  }

  toggleNameEdit() {
    this.state.nameEdit === false ?
      this.setState({nameEdit: true}) :
      this.setState({nameEdit: false});
  }

  toggleaAdressEdit() {
    this.state.addressEdit === false ?
      this.setState({addressEdit: true}) :
      this.setState({addressEdit: false});
  }

  togglePhoneEdit() {
    this.state.phoneEdit === false ?
      this.setState({phoneEdit: true}) :
      this.setState({phoneEdit: false});
  }

  toggleEmailEdit() {
    this.state.emailEdit === false ?
      this.setState({emailEdit: true}) :
      this.setState({emailEdit: false});
  }

  toggleDobEdit() {
    this.state.dobEdit === false ?
      this.setState({dobEdit: true}) :
      this.setState({dobEdit: false});
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
          <button className='edit' onClick={this.toggleNameEdit}>Edit</button>
        </div>

        <div className='living-address'>
          <p className='name'>Residential Address</p>
          { this.state.addressEdit === false ?
            <p className='content'>{application.personalInfo.address}</p> :
            <input
              type='text' name='homeAddress' id='homeAddress'
              placeholder={application.personalInfo.address} data-id={application.id}
              onChange={editPersonalInfo} required /> }
          <button className='edit' onClick={this.toggleaAdressEdit}>Edit</button>
        </div>

        <div className='phone-number'>
          <p className='name'>Phone Number</p>
          <p className='content'>{application.personalInfo.phoneNumber}</p>
          <button className='edit'>Edit</button>
        </div>

        <div className='email'>
          <p className='name'>E-Mail Address</p>
          <p className='content'>{application.personalInfo.email}</p>
          <button className='edit'>Edit</button>
        </div>

        <div className='date-of-birth'>
          <p className='name'>Date of Birth</p>
          <p className='content'>{application.personalInfo.dateOfBirth}</p>
          <button className='edit'>Edit</button>
        </div>
      </div>
    )
  }
}

export default PersInfoSection;