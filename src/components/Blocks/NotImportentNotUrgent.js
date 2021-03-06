import React from 'react';

import GeneralBlock from '../GeneralBlock/GeneralBlock';

export class NotImportentNotUrgent extends React.Component {
  constructor(props) {
    super(props)
    this.isMain = props.isMain
    this.link = props.link
    this.blockSize = props.blockSize
    this.typeBlock = props.typeBlock
  }

  render() {
    return (
      <GeneralBlock
      typeTasks = 'notImportentNotUrgent'
      title = 'Не Важное И Не Срочное'
      isMain = {this.isMain}
      link = {this.link}
      blockSize = {this.blockSize}
      typeBlock = {this.typeBlock} />
    )
  }
}