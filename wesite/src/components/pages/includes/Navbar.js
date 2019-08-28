import React,{Component} from "react"
import { connect } from 'react-redux'
import {Link} from "react-router-dom"
import {API_BASE_URL} from "../../config"
import Axios from "axios"

const CheckServer = () => {
	return new Promise((resolve, revoke)=>{
		Axios.get(API_BASE_URL)
			.then(res=> {
				resolve(false)
			})
			.catch(err=>{
				resolve(true)
			})
		})
}

class Navbar extends Component{

	async componentWillMount() {
		let response = await CheckServer();
		this.props.CheckServer(response);
	}

	render(){
		return(
			<div>
			{
			(this.props.isServerError) &&
				<div className="row server-error">Server on maintenance mode. Please try after sometime.</div>
			}
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link className="navbar-brand" to="/">Navbar</Link>
		          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		            <span className="navbar-toggler-icon"></span>
		          </button>

		          <div className="collapse navbar-collapse" id="navbarSupportedContent">
		            <ul className="navbar-nav mr-auto">
		              <li className="nav-item active">
		                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
		              </li>
		              <li className="nav-item">
		                <Link className="nav-link" to="/about-us">About Us</Link>
		              </li>
		               <li className="nav-item">
		                <Link className="nav-link" to="/sign-in">Sign In</Link>
		              </li>
		               <li className="nav-item">
		                <Link className="nav-link" to="/sign-up">Sign Up</Link>
		              </li>

		            </ul>

		          </div>
	        </nav>
	        </div>
		)
	}
}
const mapStateToProps = (state)=>{

	return {
	    isServerError: state.Common.isServerError
	};
}

const mapDispatchToProps =  (dispatch)=>{
   return{
        CheckServer: (data) => {dispatch({
 					type: 'Check_Server',
					payload:data
 				})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)
