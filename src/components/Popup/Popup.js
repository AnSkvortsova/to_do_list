import React from 'react';
import { connect } from 'react-redux';

class Popup extends React.Component {
  render() {
    return (
      <div className={`popup ${this.props.isOpen ? 'popup_opend' : null}`}>
        <div className='popup__container'>
          <input className='popup__input' placeholder='Задача'/>
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    isOpen: state.popup.isOpen
  }
};

export default connect(mapStateToProps, null)(Popup);