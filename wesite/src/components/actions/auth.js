// const SIGN_UP = 'SIGN_UP';
// const Server_Error = "Server_Error";
// const SET_LOADING = "SET_LOADING";
import {API_BASE_URL,SET_LOADING,SIGN_UP,Server_Error} from "./index"
import Axios from "axios"
const base_url= `${API_BASE_URL}users/`
export function signUp(data){
   
    return dispatch => {
    
        dispatch({
            type: SET_LOADING,
            payload: true
        });

        setTimeout(() => {
        	Axios.post(`${base_url}add`,data)
    		  .then(function (response) {
                
    		    console.log("Got to reducer");
    		    dispatch({
                    type: SIGN_UP,
                    payload: response.data
            
                })

    		  })
    		  .catch(function (error) {

    		    dispatch({
                    type: Server_Error
                })

    		  });
        },1500);

    }
}

export function signIn(data){
   console.log(data)
    // return dispatch => {
    
    //     // dispatch({
    //     //     type: SET_LOADING,
    //     //     payload: true
    //     // });

    //     // setTimeout(() => {
    //     //     Axios.post(`${base_url}add`,data)
    //     //       .then(function (response) {
                
    //     //         console.log("Got to reducer");
    //     //         dispatch({
    //     //             type: SIGN_UP,
    //     //             payload: response.data
            
    //     //         })

    //     //       })
    //     //       .catch(function (error) {

    //     //         dispatch({
    //     //             type: Server_Error
    //     //         })

    //     //       });
    //     // },1500);

    // }
}