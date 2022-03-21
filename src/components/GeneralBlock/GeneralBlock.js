import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Task } from '../Task/Task';
import { BlockName } from '../BlockName/BlockName';

import { openPopup, addTypeTasks } from '../../redux/popup/action';
import { deleteTask } from '../../redux/tasks/action';

class GeneralBlock extends React.Component {
  constructor(props) {
    super(props);
    this.typeTasks = props.typeTasks;
    this.isMain = props.isMain;
    this.link = props.link;
    this.blockSize = props.blockSize;
    this.typeBlock = props.typeBlock;
    this.title = props.title;
    this.tasks = [];

    this.handleAddTaskButton = this.handleAddTaskButton.bind(this);
  };

  handleAddTaskButton(evt) {
    this.props.addTypeTasks(evt.target.dataset.type);
    this.props.openPopup();
  }

  render() {
    if (this.typeTasks === 'importentUrgent') {
      this.tasks = this.props.importentUrgentTasks;
    }
    else if (this.typeTasks === 'importentNotUrgent') {
      this.tasks = this.props.importentNotUrgentTasks;
    }
    else if (this.typeTasks === 'notImportentUrgent') {
      this.tasks = this.props.notImportentUrgentTasks;
    }
    else if (this.typeTasks === 'notImportentNotUrgent') {
      this.tasks = this.props.notImportentNotUrgentTasks;
    };

    return (
      <section className={`generalBlock generalBlock_${this.typeTasks} ${this.blockSize}`}>
      {this.isMain 
        ? (<div className='generalBlock__main'>
          <ul className='generalBlock__tasks'>
            {this.tasks.length === 0 
              ? <p className='generalBlock__noTasks'>Пока задач нет</p> 
              : this.tasks.map((task) => (
                <Task 
                key = {task.id}
                task = {task.task}
                id = {task.id}
                typeTask = {task.typeTask}
                deleteTask = {this.props.deleteTask} />
                ))
            }
          </ul>

          <BlockName 
          typeBlock = {this.typeBlock}
          typeTasks = {this.typeTasks}
          title = {this.title}
          numberOfTasks = {this.tasks.length} />

          <button 
          className='generalBlock__button' 
          type='button' 
          onClick={this.handleAddTaskButton} 
          data-type = {this.typeTasks}
          aria-label='добавить задачу'></button>
        </div>)

        : (<Link to={this.link} className='generalBlock__link'>
          <BlockName 
          typeBlock = {this.typeBlock}
          typeTasks = {this.typeTasks}
          title = {this.title}
          numberOfTasks = {this.tasks.length} />
          </Link>)
      }
      </section>
    )
  };
};

const mapStateToProps = (state) => {
  return {
    importentUrgentTasks: state.tasks.importentUrgentTasks,
    importentNotUrgentTasks: state.tasks.importentNotUrgentTasks,
    notImportentUrgentTasks: state.tasks.notImportentUrgentTasks,
    notImportentNotUrgentTasks: state.tasks.notImportentNotUrgentTasks,
  };
};

const mapDispatchToProps = {
  openPopup,
  addTypeTasks,
  deleteTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(GeneralBlock);