import React from 'react';
import { connect } from 'react-redux';

import { Popup } from './Popup';

class EditPopup extends React.Component {
  constructor(props) {
    super(props);

    this.closePopup = props.closePopup;
    this.editTask = props.editTask;
    this.setOldTask = props.setOldTask;

    this.state = {
      task: props.oldTask,
    };
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.editTask(this.state.task, this.props.oldId, this.props.typeTasks);
    this.setOldTask('', '');
    this.setState({ task: ''});
    this.closePopup();
  }

  handleInputChange = evt => {
    this.setState({
      task: evt.target.value,
    })
  };

  //static getDerivedStateFromProps(props) {
  //  return {
  //    task: props.oldTask,
  //  };
  //};

  componentWillReceiveProps(nextProps) {
    if (nextProps.oldTask !== this.props.oldTask) {
      this.setState({
        task: nextProps.oldTask
      })
    };
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
    isOpen: state.popup.isEditOpen,
    typeTasks: state.popup.typeTasks,
    oldTask: state.popup.oldTask,
    oldId: state.popup.oldId,
  };
};

export default connect(mapStateToProps)(EditPopup);