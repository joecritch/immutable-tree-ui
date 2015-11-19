import React from 'react';
import AddBtn from './AddBtn';
import Immutable, { List, Map } from 'immutable';

export default class Block extends React.Component {
  render() {
    return (
      <div style={{padding: 20, border: '1px solid #ccc'}}>
        {this.props.blockData.get('name')} ({this.props.blockData.get('id')})
        {this.props.blockData.get('children') && this.props.blockData.get('children').map((childBlock, i) => {
          return (
            <Block
              key={i}
              blockData={childBlock}
              onAddBtnClick={this.props.onAddBtnClick}
              keyPath={this.props.keyPath.push('children').push(i)}
            />
          );
        })}
        <AddBtn
          onClick={this.props.onAddBtnClick}
          blockData={this.props.blockData}
          keyPath={this.props.keyPath}
        />
      </div>
    );
  }
}
