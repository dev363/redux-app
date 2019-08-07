// import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'
// import { findByUsername, findById, login,test} from "../services/user"

const initState = {
    loading:false,
    data:{}

}

const SignupReducer= (state = initState,{type,payload})=>{
	if(type==="SIGN_UP"){
		console.log(type)
		console.log("type")
		console.log(payload)
		return state
	}else{
		return state
	}
    
}

export default SignupReducer
