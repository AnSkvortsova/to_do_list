import React from 'react';

export class BlockName extends React.Component {
  constructor(props) {
    super(props);
    this.typeBlock = props.typeBlock;
    this.typeTasks = props.typeTasks;
    this.title = props.title;
    this.state = {
      numberOfTasks: props.numberOfTasks,
    };
  };

  static getDerivedStateFromProps(props) {
    return {
      numberOfTasks: props.numberOfTasks,
    };
  };

  shouldComponentUpdate(nextState) {
    return this.state.numberOfTasks !== nextState.numberOfTasks;
  };

  render() {
    return (
      <div className={`blockName blockName_${this.typeBlock} blockName_${this.typeTasks}`}>
        <p className={`blockName__number blockName__number_${this.typeBlock}`}>
          {this.state.numberOfTasks < 10 ? `0${this.state.numberOfTasks}` : `${this.state.numberOfTasks}`}</p>
        <h1 className={`blockName__title blockName__title_${this.typeBlock}`}>{this.title}</h1>
      </div>
    )
  };
};