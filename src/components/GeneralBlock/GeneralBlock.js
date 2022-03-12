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
  }

  render() {
    return (
      <section className={`generalBlock generalBlock_${this.typeTasks} ${this.blockSize}`}>
      {this.isMain 
        ? (<div className='generalBlock__main'>
          <Task />
          <BlockName typeBlock = {this.typeBlock} />
        </div>)
        : (<Link to={this.link} className='generalBlock__link'><BlockName typeBlock = {this.typeBlock} /></Link>)}
      </section>
    )
  };
};

