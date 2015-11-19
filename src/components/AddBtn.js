import React from 'react';

export default class AddBtn extends React.Component {
  handleClick(e) {
    const parent = this.props.blockData;
    const name = 'NEW BLOCK';
    this.props.onClick(name, parent, this.props.keyPath);
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)} style={{
        width: 30,
        height: 30,
        lineHeight: '30px',
        fontSize: 16,
        textAlign: 'center',
        backgroundColor: '#999',
        color: '#fff'
      }}>+</button>
    );
  }
}
