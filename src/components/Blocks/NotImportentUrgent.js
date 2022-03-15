import React from 'react';

import GeneralBlock from '../GeneralBlock/GeneralBlock';

export class NotImportentUrgent extends React.Component {
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
      typeTasks = 'notImportentUrgent'
      title = 'Не Важное, но Срочное'
      isMain = {this.isMain}
      link = {this.link}
      blockSize = {this.blockSize}
      typeBlock = {this.typeBlock} />
    )
  }
}