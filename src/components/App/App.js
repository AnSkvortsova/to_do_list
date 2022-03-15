import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';

import { ImportentUrgentPage } from '../BlocksOnPage/ImportentUrgentPage';
import { ImportentNotUrgentPage } from '../BlocksOnPage/ImportentNotUrgentPage';
import { NotImportentUrgentPage } from '../BlocksOnPage/NotImportentUrgentPage';
import { NotImportentNotUrgentPage } from '../BlocksOnPage/NotImportentNotUrgentPage';

import Popup from '../Popup/Popup';

import { closePopup } from '../../redux/action';

class App extends React.Component {
  componentDidMount() {
    const closePopupByEscape = (evt) => {
      console.log(evt)
      if(evt.key === 'Escape') {
        this.props.closePopup();
      };
    };
    document.addEventListener('keydown', closePopupByEscape);
    return document.removeEventListener('keydown', closePopupByEscape);
  };

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
        <Popup />
      </div>
    );
  };
};

const mapDispatchToProps = {
  closePopup
};

export default connect(null, mapDispatchToProps)(App);
