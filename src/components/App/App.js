import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ImportentUrgentPage } from '../ImportentUrgentPage/ImportentUrgentPage';
import { ImportentNotUrgent } from '../ImportentNotUrgent/ImportentNotUrgent';
import { NotImportentUrgent } from '../NotImportentUrgent/NotImportentUrgent';
import { NotImportentNotUrgent } from '../NotImportentNotUrgent/NotImportentNotUrgent';

const App = () => (
  <div className='app'>
    <Routes>
      <Route exact path='/' element ={<ImportentUrgentPage />} />
      <Route path='/importent-not-urgent' element ={<ImportentNotUrgent />} />
      <Route path='/not-importent-urgent' element ={<NotImportentUrgent />} />
      <Route path='/not-importent-not-urgent' element ={<NotImportentNotUrgent />} />
    </Routes>
  </div>
);

export default App;
