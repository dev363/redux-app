import Axios from "axios"

const initState = {
    isSignUpPending:false,
    isSignUpSuccess:null,
    isSignUpError:null,
    isLoginPending:false,
    isLoginSuccess:null,
    isLoginError:null,
    data:{}

}

const SignupReducer= (state = initState,{type,payload})=>{
	switch (type) {
      /** Return Signup status */

      	case 'SET_LOADING': {

			return {
	          ...state,
	          isSignUpPending:payload
	        }

	    }

	    case 'SIGN_UP': {

			return {
	          ...state,
	          isSignUpPending:false,
	          isSignUpSuccess: (payload.status===200) ? "User Signup successfully." : null,
	          isSignUpError: (payload.status===404) ? payload.message : null,
	        }

	    }

	    case 'Server_Error': {

			return {
	          ...state,
	          isSignUpPending:false,
	          isServerError:true
	        }

	    }

	    default:
        	return state;
	}
    
}

export default SignupReducer
