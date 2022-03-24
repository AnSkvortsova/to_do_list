import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';

import { ImportentUrgentPage } from '../BlocksOnPage/ImportentUrgentPage';
import { ImportentNotUrgentPage } from '../BlocksOnPage/ImportentNotUrgentPage';
import { NotImportentUrgentPage } from '../BlocksOnPage/NotImportentUrgentPage';
import { NotImportentNotUrgentPage } from '../BlocksOnPage/NotImportentNotUrgentPage';

import AddPopup from '../Popup/AddPopup';
import EditPopup from '../Popup/EditPopup';


import { closePopup, setOldTask } from '../../redux/popup/action';
import { addTask, editTask } from '../../redux/tasks/action';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.closePopupByEscape = this.closePopupByEscape.bind(this);
    this.closePopupByOverlay = this.closePopupByOverlay.bind(this);
  }

  closePopupByEscape(evt) {
    if(evt.key === 'Escape') {
      this.props.closePopup();
    };
  };

  closePopupByOverlay(evt) {
    if(evt.target.classList.contains('popup_opend')) {
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
        <AddPopup
        closePopup = {this.props.closePopup}
        addTask = {this.props.addTask} />
        <EditPopup 
        closePopup = {this.props.closePopup}
        editTask = {this.props.editTask}
        setOldTask = {this.props.setOldTask} />
      </div>
    );
  };
};

const mapDispatchToProps = {
  closePopup,
  addTask,
  editTask,
  setOldTask,
};

export default connect(null, mapDispatchToProps)(App);
