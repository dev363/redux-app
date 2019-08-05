import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {createStore} from "redux"

function reducer(state, action){
	if(action.type === 'ChangeState'){
		return action.payload.state;
	}
	
	return "state";
}

const store= createStore(reducer);
console.log(store.getState())

const action={
	type:"ChangeState",
	payload:{
		state:"New state"
	}
}

store.dispatch(action)
console.log(store.getState())

ReactDOM.render(
  <App />,
  document.getElementById('root')
);