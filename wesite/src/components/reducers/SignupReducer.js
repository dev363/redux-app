import {SET_LOADING,SIGN_UP,SIGN_IN} from "../config"

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
      case SET_LOADING: {
		      return {
	          ...state,
	          [payload.key]:payload.state
	        }
	    }
	    case SIGN_UP: {
			     return {
  	          ...state,
  	          isSignUpPending:false,
  	          isSignUpSuccess: (payload.status===200) ? "User Signup successfully." : null,
  	          isSignUpError: (payload.status===404) ? payload.message : null,
              data:payload.data
	         }
	    }

      case SIGN_IN: {
			    return {
	          ...state,
	          isLoginPending:false,
	          isLoginSuccess: (payload.status===200) ? "User Login successfully." : null,
	          isLoginError: (payload.status===404) ? payload.message : null,
            data:payload.data
	        }
	    }
	    default:{
        return state;
      }
	}

}

export default SignupReducer
