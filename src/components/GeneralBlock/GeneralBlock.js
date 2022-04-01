import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Task } from '../Task/Task';
import { BlockName } from '../BlockName/BlockName';

import { openAddPopup, openEditPopup, addTypeTasks, setOldTask } from '../../redux/popup/action';
import { progressTask, completeTask, deleteTask } from '../../redux/tasks/action';

class GeneralBlock extends React.Component {
  constructor(props) {
    super(props);
    this.typeTasks = props.typeTasks;
    this.isMain = props.isMain;
    this.link = props.link;
    this.blockSize = props.blockSize;
    this.typeBlock = props.typeBlock;
    this.title = props.title;
    this.state = {
      tasks: [],
    };

    this.handleAddTaskButton = this.handleAddTaskButton.bind(this);
    this.filterByTypeTask = this.filterByTypeTask.bind(this);
  };

  handleAddTaskButton(evt) {
    this.props.addTypeTasks(evt.target.dataset.type);
    this.props.openAddPopup();
  };

  filterByTypeTask(task) {
    if (task.typeTask === this.typeTasks) {
      return task;
    };
  };

  static getDerivedStateFromProps(props) {
    return {tasks: props.tasks}
  };
  
  render() {
    const tasks = this.state.tasks.filter(this.filterByTypeTask);

    return (
      <section className={`generalBlock generalBlock_${this.typeTasks} ${this.blockSize}`}>
      {this.isMain 
        ? (<div className='generalBlock__main'>
          <ul className='generalBlock__tasks'>
            {tasks.length === 0 
              ? <p className='generalBlock__noTasks'>Пока задач нет</p> 
              : tasks.map((task) => ( 
                <Task 
                key = {task.id}
                task = {task.task}
                id = {task.id}
                inProgress = {task.inProgress}
                isDone = {task.isDone}
                typeTask = {task.typeTask}
                openEditPopup = {this.props.openEditPopup}
                addTypeTasks = {this.props.addTypeTasks}
                setOldTask = {this.props.setOldTask}
                progressTask = {this.props.progressTask}
                completeTask = {this.props.completeTask}
                deleteTask = {this.props.deleteTask} />
              ))
            }
          </ul>

          <div className='generalBlock__info'>
            <BlockName 
            typeBlock = {this.typeBlock}
            typeTasks = {this.typeTasks}
            title = {this.title}
            numberOfTasks = {tasks.length} />
  
            <button 
            className='generalBlock__button' 
            type='button' 
            onClick={this.handleAddTaskButton} 
            data-type = {this.typeTasks}
            aria-label='добавить задачу'></button>
          </div>
        </div>)

        : (<Link to={this.link} className='generalBlock__link'>
          <BlockName 
          typeBlock = {this.typeBlock}
          typeTasks = {this.typeTasks}
          title = {this.title}
          numberOfTasks = {tasks.length} />
          </Link>)
      }
      </section>
    )
  };
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.tasks,
  };
};

const mapDispatchToProps = {
  openAddPopup,
  openEditPopup,
  addTypeTasks,
  setOldTask,
  progressTask,
  completeTask,
  deleteTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(GeneralBlock);