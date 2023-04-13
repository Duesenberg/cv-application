import React, { Component } from 'react';

class DetListPrint extends Component {
 render() {
  const { experience } = this.props;

  return (
    <div className='details-list'>
      {experience.workDetails?.map((detail) => {
        return (
          <div key={detail.id} className='detail'>
            <p className='text'>{detail.description}</p>
          </div>
      )})}
    </div>
  )
 }
}

export default DetListPrint;
