import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Task } from '../Task/Task';
import { BlockName } from '../BlockName/BlockName';

import { openPopup } from '../../redux/action'

class GeneralBlock extends React.Component {
  constructor(props) {
    super(props)
    this.typeTasks = props.typeTasks
    this.isMain = props.isMain
    this.link = props.link
    this.blockSize = props.blockSize
    this.typeBlock = props.typeBlock
    this.title = props.title
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
          <button className='generalBlock__button' type='button' onClick={this.props.openPopup} aria-label='добавить задачу'></button>
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

const mapDispatchToProps = {
  openPopup
}

export default connect(null, mapDispatchToProps)(GeneralBlock);