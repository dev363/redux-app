import React,{Component} from "react"
import { connect } from 'react-redux'
import {Link} from "react-router-dom"

class Navbar extends Component{
	componentWillMount() {
		console.log("HHHHHHHHHH")
		this.props.dispatch(
			 {
			        type: 'Check_Server'
			    }
			)
		console.log(this.props)
		
	}
	render(){
		// console.log(this.props.isServerError);
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
	console.log("hello i am here")
	console.log(state.Common)
	return {
	    isServerError: state.Common.isServerError
	};
}

export default connect(mapStateToProps)(Navbar)
