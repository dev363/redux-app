import {ApiCalls,API_BASE_URL,SET_LOADING,SIGN_UP,Check_Server} from "../config"
import Axios from "axios"
const base_url= `${API_BASE_URL}users/`
export function signUp(data){

    return dispatch => {

        dispatch({
            type: SET_LOADING,
            payload: {key:'isSignUpPending',state:true}
        });

        setTimeout(() => {
        	Axios.post(`${base_url}sign-up`,data)
    		  .then(function (response) {
    		    dispatch({
                    type: SIGN_UP,
                    payload: response.data
                })

    		  })
    		  .catch(function (error) {
    		      dispatch({
                    type: Check_Server,
                    payload:true
              })
    		  });
        },1500);
    }
}

export function signIn(data){
  ApiCalls.AxiosCall("get")
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
