import React, { Component } from 'react';
import Block from './Block';
import Immutable, { List } from 'immutable';

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Block
          keyPath={List()}
          blockData={this.props.blockData}
          onAddBtnClick={this.props.onAddBtnClick}
        />
      </div>
    );
  }
}
