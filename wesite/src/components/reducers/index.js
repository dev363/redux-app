import {combineReducers} from "redux"

// Import reducers
import SignupReducer from './SignupReducer';
import CommonReducer from './CommonReducer';

const allReducer= combineReducers({
	SignupR:SignupReducer,
	Common:CommonReducer,
})

export default allReducer;