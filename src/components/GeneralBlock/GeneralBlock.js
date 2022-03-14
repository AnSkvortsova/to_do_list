import React from 'react';
import { Link } from 'react-router-dom';

import { Task } from '../Task/Task';
import { BlockName } from '../BlockName/BlockName';

export class GeneralBlock extends React.Component {
  constructor(props) {
    super(props)
    this.typeTasks = props.typeTasks
    this.isMain = props.isMain
    this.link = props.link
    this.blockSize = props.blockSize
    this.typeBlock = props.typeBlock
    this.title = props.title
  }

  handleAddTaskBtn() {
    
  }

  render() {
    return (
      <section className={`generalBlock generalBlock_${this.typeTasks} ${this.blockSize}`}>
      {this.isMain 
        ? (<div className='generalBlock__main'>
          <Task />
          <BlockName 
          typeBlock = {this.typeBlock}
          typeTasks = {this.typeTasks}
          title = {this.title} />
          <button className='generalBlock__button' type='button' onClick={this.handleAddTaskBtn} aria-label='добавить задачу'></button>
        </div>)
        : (<Link to={this.link} className='generalBlock__link'>
          <BlockName 
          typeBlock = {this.typeBlock}
          typeTasks = {this.typeTasks}
          title = {this.title} />
          </Link>)}
      </section>
    )
  };
};

