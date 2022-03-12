import React from 'react';

export class BlockName extends React.Component {
  constructor(props) {
    super(props)
    this.typeBlock = props.typeBlock
  }

  render() {
    return (
      <div className={`blockName blockName_${this.typeBlock}`}>
        <p className={`blockName__number blockName__number_${this.typeBlock}`}>01</p>
        <h1 className={`blockName__title blockName__title_${this.typeBlock}`}>Важное И Срочное</h1>
      </div>
    )
  };
};