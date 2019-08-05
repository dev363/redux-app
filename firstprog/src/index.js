import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {combineReducers, createStore} from "redux"

function productReducer(state=[], action){

	return state;
}
function userReducer(state="", action){

	return state;
}

const allReducer= combineReducers({
	product:productReducer,
	user:userReducer
})

const store= createStore(allReducer,
	{
		product:[{name:"Micle"}],
		user:"John"
	},
	window.devToolsExtension && window.devToolsExtension()
);
console.log(store.getState())


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
