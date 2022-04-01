import React, { Fragment } from 'react';

export class Task extends React.Component {
  constructor(props) {
    super(props);
    this.typeTask = props.typeTask;
    this.openEditPopup = props.openEditPopup;
    this.addTypeTasks = props.addTypeTasks;
    this.setOldTask = props.setOldTask;
    this.progressTask = props.progressTask;
    this.completeTask = props.completeTask;
    this.deleteTask = props.deleteTask;
    this.state = {};

    this.handleDeleteButton = this.handleDeleteButton.bind(this);
    this.handleEditButton = this.handleEditButton.bind(this);
    this.handleChackedButton = this.handleChackedButton.bind(this);
  };

  handleChackedButton() {
    if (this.state.inProgress === false && this.state.isDone === false) {
      this.progressTask(this.state.id);
    } else if (this.state.inProgress === true && this.state.isDone === false) {
      this.progressTask(this.state.id);
      this.completeTask(this.state.id);
    } else if (this.state.inProgress === false && this.state.isDone === true) {
      this.completeTask(this.state.id);
    }
  };

  handleDeleteButton() {
    this.deleteTask(this.state.id);
  };

  handleEditButton(evt) {
    this.addTypeTasks(evt.target.dataset.type);
    this.setOldTask(this.state.task, this.state.id);
    this.openEditPopup();
  };

  static getDerivedStateFromProps(props) {
    return {
      task: props.task,
      id: props.id,
      inProgress: props.inProgress,
      isDone: props.isDone,
    };
  };

  render() {
    console.log(this.state)
    return (
      <Fragment>
        <li className='task'>
          <div className='task__item'>
            <button 
            className={`task__icon 
              ${this.state.inProgress ? 'task__icon_inProgress' : ''}
              ${this.state.isDone ? 'task__icon_done' : ''}`}
            type='button'
            onClick = {this.handleChackedButton}
            aria-label='check task'></button>

            <p className='task__text'>{this.state.task}</p>
          </div>

          <div className='task__interaction'>
            <button 
            className='task__icon task__icon_edit'
            type='button'
            onClick = {this.handleEditButton}
            data-type = {this.typeTask}
            aria-label='edit task'></button>

            <button 
            className='task__icon task__icon_delete'
            type='button'
            onClick = {this.handleDeleteButton}
            aria-label='task delete'></button>
            </div>
        </li>
      <div className='tasks__decor'></div>
      </Fragment>
    )
  };
};