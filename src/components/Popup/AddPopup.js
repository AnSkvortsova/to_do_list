import React from 'react';
import { connect } from 'react-redux';

import { Popup } from './Popup';

class AddPopup extends React.Component {
  constructor(props) {
    super(props);
    this.closePopup = props.closePopup;
    this.addTask = props.addTask;
    this.state = {
      task: '',
    };
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const {task} = this.state;
    const newTask = {
      task, 
      id: Date.now().toString(),
      typeTask: this.props.typeTasks,
    };
    this.addTask(newTask, this.props.typeTasks);
    this.setState({ task: ''});
    this.closePopup();
  };

  handleInputChange = evt => {
    this.setState({
      task: evt.target.value
    })
  };

  render(){
    return (
      <Popup 
      isOpen = {this.props.isOpen}
      onSubmit = {this.handleSubmit}
      onInputChange = {this.handleInputChange}
      task = {this.state.task} />
    )
  };
};

const mapStateToProps = (state) => {
  return {
    isOpen: state.popup.isAddOpen,
    typeTasks: state.popup.typeTasks,
  };
};

export default connect(mapStateToProps)(AddPopup);