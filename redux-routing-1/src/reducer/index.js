const reducer = (state=0, action) => {

	switch(action.type){
		case "INCREMENT": return state+1

		case "DECREMENT": 
			if(state > 0)
				return state-1

		case "RESET": return 0
		
		default :return state
	}

}

export default reducer;