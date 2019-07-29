import { connect } from 'react-redux';
import { createPost } from '../actions';

import {  savePost } from '../actions';
import NewPost from '../components/NewPost';




import axios from "axios";
//import {backendurl}  from './index';
const url = '/books'
const BASE_URL = "http://localhost:8090";


const mapDispatchToProps = dispatch => {
  return {
    onAddPost: post => {
		console.log("www"+post.title);
		
		
		axios.post(BASE_URL+'/books/add',post)
        .then(function (response) {
        
        })
	}
  }
        
};

export default connect(
  null,
  mapDispatchToProps
)(NewPost);