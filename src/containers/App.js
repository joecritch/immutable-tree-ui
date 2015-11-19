import React from 'react';
import Canvas from '../components/Canvas';
import { connect } from 'react-redux';
import { addBlock } from '../actions/blocks';

class App extends React.Component {
  render() {
    const { dispatch, blocks } = this.props;
    return (
      <Canvas blockData={blocks} onAddBtnClick={(name, parent, keyPath) => {
        dispatch(addBlock(name, parent, keyPath))
      }} />
    );
  }
}

function select(state) {
  return {
    blocks: state
  };
}

export default connect(select)(App);
