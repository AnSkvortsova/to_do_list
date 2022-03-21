import React from 'react';
import { connect } from 'react-redux';

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.closePopup = props.closePopup;
    this.addTypeTasks = props.addTypeTasks;
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
    this.addTypeTasks('');
  };

  handleInputChange = evt => {
    this.setState({
      task: evt.target.value
    })
  };

  render() {
    return (
      <div className={`popup ${this.props.isOpen ? 'popup_opend' : null}`}>
        <form className='popup__form' onSubmit={this.handleSubmit}>
          <input 
          className='popup__input'
          value = {this.state.task}
          onChange = {this.handleInputChange}
          placeholder='Задача'/>
        </form>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    isOpen: state.popup.isOpen,
    typeTasks: state.popup.typeTasks,
  };
};

export default connect(mapStateToProps)(Popup);