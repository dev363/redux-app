import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore} from "redux"

import App from './App';
import './index.css';

import AllReducer from './components/reducers/index';

const store= createStore(AllReducer);

ReactDOM.render(
	<Provider store={store} > <App /></Provider>,
  document.getElementById('root')
);