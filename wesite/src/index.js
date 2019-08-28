import React from 'react';
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { composeWithDevTools } from 'redux-devtools-extension';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';

import AllReducer from './components/reducers/index';

const middleware = composeWithDevTools(applyMiddleware(promise, thunk));
const store= createStore(AllReducer, middleware);

ReactDOM.render(
	<Provider store={store} > <App store={store}/></Provider>,
  document.getElementById('root')
);
