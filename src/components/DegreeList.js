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
              {degree.name + ', ' + degree.institution + ', ' 
              + degree.startYear + '-' + degree.endYear}
          </div>    
        })}
      </div>
    )
  }
}

export default DegreeList;
