import React, { Fragment } from 'react';

import { ImportentUrgent } from '../Blocks/ImportentUrgent';
import { ImportentNotUrgent } from '../Blocks/ImportentNotUrgent';
import { NotImportentUrgent } from '../Blocks/NotImportentUrgent';
import { NotImportentNotUrgent } from '../Blocks/NotImportentNotUrgent';

export class NotImportentUrgentPage extends React.Component {

  render() {
    return (
      <Fragment>
      <div className='blocksOnPage'>
        <NotImportentUrgent 
        isMain = {true}
        blockSize = 'generalBlock_L'
        typeBlock = 'main' />

        <NotImportentNotUrgent 
        isMain = {false}
        link = '/not-importent-not-urgent'
        blockSize = 'generalBlock_S'
        typeBlock = 'side' />
      </div>

      <div className='blocksOnPage'>
        <ImportentUrgent 
        isMain = {false}
        link = '/'
        blockSize = 'generalBlock_M'
        typeBlock = 'bottom' />
        
        <ImportentNotUrgent 
        isMain = {false}
        link = '/importent-not-urgent'
        blockSize = 'generalBlock_M'
        typeBlock = 'bottom' />
      </div>
      </Fragment>
    )
  }
}