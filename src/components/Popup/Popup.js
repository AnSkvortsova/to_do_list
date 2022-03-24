import React from 'react';

export class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = props.onSubmit;
    this.onInputChange = props.onInputChange;
    this.state = {
      task: props.task,
      isOpen: props.isOpen,
    };
  };

  static getDerivedStateFromProps(props) {
      return {
      task: props.task,
      isOpen: props.isOpen,
    };
  };

  render() {
    return (
      <div className={`popup ${this.state.isOpen ? 'popup_opend' : null}`}>
        <form className='popup__form' onSubmit={this.onSubmit}>
          <input 
          className='popup__input'
          value = {this.state.task}
          onChange = {this.onInputChange}
          placeholder='Задача'/>
        </form>
      </div>
    )
  };
};

