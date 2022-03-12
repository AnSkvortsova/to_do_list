import React, { Fragment } from 'react';

import { ImportentUrgent } from '../ImportentUrgent/ImportentUrgent';
import { ImportentNotUrgent } from '../ImportentNotUrgent/ImportentNotUrgent';
import { NotImportentUrgent } from '../NotImportentUrgent/NotImportentUrgent';
import { NotImportentNotUrgent } from '../NotImportentNotUrgent/NotImportentNotUrgent';

export class ImportentUrgentPage extends React.Component {

  render() {
    return (
      <Fragment>
      <div className='importentUrgentPage'>
        <ImportentUrgent 
        isMain = {true}
        blockSize = 'generalBlock_L'
        typeBlock = 'main' />

        <ImportentNotUrgent 
        isMain = {false}
        link = '/importent-not-urgent'
        blockSize = 'generalBlock_S'
        typeBlock = 'side' />
      </div>

      <div className='importentUrgentPage'>
        <NotImportentUrgent 
        isMain = {false}
        link = '/not-importent-urgent'
        blockSize = 'generalBlock_M'
        typeBlock = 'bottom' />
        
        <NotImportentNotUrgent 
        isMain = {false}
        link = '/not-importent-not-urgent'
        blockSize = 'generalBlock_M'
        typeBlock = 'bottom' />
      </div>
      </Fragment>
    )
  }
}