import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import blocksReducer from './reducers/blocks';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

let store = createStore(blocksReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
