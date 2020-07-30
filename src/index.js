import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from './store/reducers'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const store = createStore(rootReducer, composeEnhancers())

ReactDOM.render(<Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
