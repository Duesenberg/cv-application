import React, { Component } from 'react';

class LeadershipSection extends Component {
  render() {
    const { leadership } = this.props;

    return (
      <div className='leadership-section'>
        {leadership.roles.map((role) => {
          <div 
            className='role'
            key={role.id}>
              <p className='text'>{role.description}</p>
              <button className='edit'>Edit</button>
              <button className='remove'>Remove</button>
          </div>
        })}
      </div>
    )
  }
}

export default LeadershipSection;
