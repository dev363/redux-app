const initState = {
    isServerError:false,
    data:{}
}

const CommonReducer= (state = initState,{type,payload})=>{
	switch (type) {
    	case 'Check_Server': {
        return {
	          ...state,
	          isServerError:payload,
	        }
        }
	    default:{
        return state;
      }
	}
}

export default CommonReducer
