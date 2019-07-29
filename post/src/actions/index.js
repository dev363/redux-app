import uuidv4 from 'uuid/v4';
import { ADD_POST, DELETE_POST } from './types';

//import { newBook, saveBook, fetchBook, updateBook } //from '../actions/book-actions';


import axios from "axios";
//import {backendurl}  from './index';
const url = '/books'
const BASE_URL = "http://localhost:8090";





export function savePost(post) {
 // console.log(book);
  return dispatch => {

    axios.post(BASE_URL+'/books/add',post)
        .then(function (response) {
        // console.log(response);
          dispatch({
              type: 'ADD_POST',
              payload: response
      
            })
        })
        .catch(function (error) {
          console.log("error",error);
          dispatch({
              type: 'SAVE_BOOK_REJECTED',
              payload: error
            })
        });
    

      
  }


}











/* export const createPost = ({ title, body }) => ({
  type: ADD_POST,
  payload: {
    id: uuidv4(),
    title,
    body
  }
}); */

export const deletePost = id => ({
  type: DELETE_POST,
  payload: {
    id
  }
});