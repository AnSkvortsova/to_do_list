import React from 'react';

export class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup__container'>
          <input className='popup__input' placeholder='Задача'/>
        </div>
      </div>
    )
  }
}