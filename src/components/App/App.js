import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';

import { ImportentUrgentPage } from '../BlocksOnPage/ImportentUrgentPage';
import { ImportentNotUrgentPage } from '../BlocksOnPage/ImportentNotUrgentPage';
import { NotImportentUrgentPage } from '../BlocksOnPage/NotImportentUrgentPage';
import { NotImportentNotUrgentPage } from '../BlocksOnPage/NotImportentNotUrgentPage';

import Popup from '../Popup/Popup';

import { closePopup } from '../../redux/popup/action';
import { addTask } from '../../redux/tasks/action';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.closePopupByEscape = this.closePopupByEscape.bind(this);
    this.closePopupByOverlay = this.closePopupByOverlay.bind(this);
  }

  closePopupByEscape(evt) {
    if(evt.key === 'Escape') {
      console.log(1);
      this.props.closePopup();
    };
  };

  closePopupByOverlay(evt) {
    if(evt.target.classList.contains('popup_opend')) {
      console.log(2);
      this.props.closePopup();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.closePopupByEscape);
    document.addEventListener('click', this.closePopupByOverlay);
  };

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closePopupByEscape);
    document.removeEventListener('click', this.closePopupByOverlay);
  }

  render() {
    return (
      <div className='app'>
        <main className='app__main'>
          <Routes>
            <Route exact path='/' element ={<ImportentUrgentPage />} />
            <Route path='/importent-not-urgent' element ={<ImportentNotUrgentPage />} />
            <Route path='/not-importent-urgent' element ={<NotImportentUrgentPage />} />
            <Route path='/not-importent-not-urgent' element ={<NotImportentNotUrgentPage />} />
          </Routes>
        </main>
        <Popup
        isOpen = {this.props.isOpen}
        closePopup = {this.props.closePopup}
        addTask = {this.props.addTask} />
      </div>
    );
  };
};

const mapDispatchToProps = {
  closePopup,
  addTask,
};

export default connect(null, mapDispatchToProps)(App);
