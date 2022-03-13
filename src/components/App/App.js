import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ImportentUrgentPage } from '../BlocksOnPage/ImportentUrgentPage';
import { ImportentNotUrgentPage } from '../BlocksOnPage/ImportentNotUrgentPage';
import { NotImportentUrgentPage } from '../BlocksOnPage/NotImportentUrgentPage';
import { NotImportentNotUrgentPage } from '../BlocksOnPage/NotImportentNotUrgentPage';

const App = () => (
  <div className='app'>
    <Routes>
      <Route exact path='/' element ={<ImportentUrgentPage />} />
      <Route path='/importent-not-urgent' element ={<ImportentNotUrgentPage />} />
      <Route path='/not-importent-urgent' element ={<NotImportentUrgentPage />} />
      <Route path='/not-importent-not-urgent' element ={<NotImportentNotUrgentPage />} />
    </Routes>
  </div>
);

export default App;
