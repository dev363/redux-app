import {API_BASE_URL} from "../actions/index"
import Axios from "axios"
const base_url= `${API_BASE_URL}`

const initState = {
    isServerError:false,
    data:{}
}

const CommonReducer= (state = initState,{type})=>{
	switch (type) {
      /** Return Signup status */

      	case 'Check_Server': {

			// return {
	  //         ...state,
	  //         isServerError:true
	  //       }
		  Axios.get(base_url)
	  		.then(res=> {
	  			console.log("Server is running...")
	  			return {
		          ...state,
		          isServerError:false
		        }
		    
	  		})
	  		.catch(err=>{
	  			console.log("Server not working (:")
	  			return {
		          ...state,
		          isServerError:true
		        }
		        
	  		})
	    }

	    default:
        	return state;
	}
    
}

export default CommonReducer
