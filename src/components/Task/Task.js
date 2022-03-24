import React, { Fragment } from 'react';

export class Task extends React.Component {
  constructor(props) {
    super(props);
    this.typeTask = props.typeTask;
    this.openEditPopup = props.openEditPopup;
    this.addTypeTasks = props.addTypeTasks;
    this.setOldTask = props.setOldTask;
    this.deleteTask = props.deleteTask;
    this.state = {
      task: props.task,
      id: props.id,
    }

    this.handleDeleteButton = this.handleDeleteButton.bind(this);
    this.handleEditButton = this.handleEditButton.bind(this);
  };

  handleChackedButton(evt) {
    console.log(evt.target)
  };

  handleDeleteButton() {
    this.deleteTask(this.state.id, this.typeTask);
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
    };
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