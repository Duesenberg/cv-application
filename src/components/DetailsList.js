import React, { Component } from 'react';

class DetailsList extends Component {
 render() {
  const { details } = this.props;

  return (
    <div className='details-list'>
      {details.map((detail) => {
        return (
          <div 
            key={detail.id}
            className='detail'>
              <p className='text'>{detail.description}</p>
              <button className='edit'>Edit</button>
              <button className='remove'>Remove</button>
          </div>
        )
      })}
    </div>
  )
 }
}

export default DetailsList;
