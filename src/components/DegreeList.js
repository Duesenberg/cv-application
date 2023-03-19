import React, { Component } from 'react';

class DegreeList extends Component {
  render() {
    const { degrees } = this.props;

    return (
      <div className='degrees'>
        {degrees.map((degree) => {
          <div
            key={degree.id}
            className='degree'>
              <p className='text'>
                {degree.name + ', ' + degree.institution + ', ' 
                + degree.startYear + '-' + degree.endYear}
              </p>
              <button className='edit'>Edit</button>
              <button className='remove'>Remove</button>
          </div>    
        })}
      </div>
    )
  }
}

export default DegreeList;
