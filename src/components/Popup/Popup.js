import React from 'react';
import { connect } from 'react-redux';

class Popup extends React.Component {
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
      task, id: Date.now().toString() 
    };
    this.addTask(newTask);
    this.setState({ task: ''});
    this.closePopup();
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
  };
};

export default connect(mapStateToProps)(Popup);