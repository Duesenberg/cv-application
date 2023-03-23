import React, { Component } from 'react';

class AchievementSection extends Component {
  render() {
    const { achievements } = this.props;

    return (
      <div className='achievement-section'>
        {achievements.list.map((item) => {
          <div 
            className='item'
            key={item.id}>
              <p className='text'>{item.description}</p>
              <button className='edit'>Edit</button>
              <button className='remove'>Remove</button>
          </div>
        })}
      </div>
    )
  }
}

export default AchievementSection;
