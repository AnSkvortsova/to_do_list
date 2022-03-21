import React, { Fragment } from 'react';

export class Task extends React.Component {
  constructor(props) {
    super(props);
    this.task = props.task;
    this.id = props.id;
    this.typeTask = props.typeTask;
    this.deleteTask = props.deleteTask;

    this.handleDeleteButton = this.handleDeleteButton.bind(this);
  };

  handleDeleteButton() {
    this.deleteTask(this.id, this.typeTask);
  };

  render() {
    return (
      <Fragment>
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
          onClick = {this.handleDeleteButton}
          aria-label='task delete'></button>
        </li>
      <div className='tasks__decor'></div>
      </Fragment>
    )
  };
};