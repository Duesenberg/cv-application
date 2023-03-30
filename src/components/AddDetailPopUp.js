import React, { Component } from 'react';

class AddDetailPopUp extends Component {
  handleSubmit = (e) => {
    this.props.detailAdd(e);
    this.props.hidePopUp();
 }

 render() {
   const { hidePopUp, detailAdd, application, experience, addDetailInfo } = this.props;

   return (
     <form 
      className='pop-up' data-apid={application.id} onSubmit={this.handleSubmit}
      data-expid={experience.id}>
       <input type='text' name='detail' id='detail' data-id={application.id} 
        onChange={addDetailInfo} required />
       <button className='create-detail' type='submit'>Add</button>
       <button className='hide-popup' onClick={hidePopUp}>Hide</button>
     </form>
   );
 }
}

export default AddDetailPopUp;