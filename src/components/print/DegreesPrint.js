import React, { Component } from 'react';

class DegreesPrint extends Component {
  render() {
    const { application } = this.props;

    return (
      <div className='degrees'>
        {application.education.degrees.map((degree) => {
          return (
          <div
            key={degree.id}
            className='degree'>
              <p className='text'>
                {degree.name + ', ' + degree.institution + ', ' 
                + '(' + degree.startYear + '-' + degree.endYear + ')'}
              </p>
          </div>)
        })}
      </div>
    )
  }
}

export default DegreesPrint;
