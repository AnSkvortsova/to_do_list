import React, { Fragment } from 'react';

export class Task extends React.Component {
  constructor(props) {
    super(props)
    this.task = props.task
  }

  render() {
    return (
      <Fragment>
      <ul className='tasks'>
        <li className='task'>
          <div className='task__item'>
            <button 
            className='task__icon'
            type='button'
            aria-label='check task'></button>
            <p className='task__text'>{this.task}</p>
          </div>
          <button 
          className='task__icon task__icon_delete'
          type='button'
          aria-label='task delete'></button>
        </li>
      </ul>
      <div className='tasks__decor'></div>
      </Fragment>
    )
  };
};