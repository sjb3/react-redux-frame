import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import freeze from 'redux-freeze';
import _ from 'lodash';

const logger = createLogger();
// const store = createStore(rootReducer);
const middleweares = _.compact([thunk, freeze, logger]);
const createStoreWithMiddleware = applyMiddleware(...middleweares)(createStore)
const store = createStoreWithMiddleware(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

