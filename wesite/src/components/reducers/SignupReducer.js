// import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
    loading:false,
    data:{}

}

const SignupReducer= (state = initState,action)=>{
	if(action.type){
		console.log(state)
		return state
	}else{
		return state
	}
    
}

export default SignupReducer
