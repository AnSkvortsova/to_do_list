import React, { Fragment } from 'react';

import { ImportentUrgent } from '../Blocks/ImportentUrgent';
import { ImportentNotUrgent } from '../Blocks/ImportentNotUrgent';
import { NotImportentUrgent } from '../Blocks/NotImportentUrgent';
import { NotImportentNotUrgent } from '../Blocks/NotImportentNotUrgent';

export class ImportentNotUrgentPage extends React.Component {

  render() {
    return (
      <Fragment>
      <div className='blocksOnPage'>
        <ImportentNotUrgent 
        isMain = {true}
        blockSize = 'generalBlock_L'
        typeBlock = 'main' />

        <ImportentUrgent 
        isMain = {false}
        link = '/'
        blockSize = 'generalBlock_S'
        typeBlock = 'side' />
      </div>

      <div className='blocksOnPage'>
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