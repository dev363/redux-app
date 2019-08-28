import React,{Component} from "react"
import { connect } from 'react-redux'
import {Link} from "react-router-dom"
import "./SignUp.css"

const signIn = (data) => {
	console.log(data)
	return {
        type: 'SET_LOADING',
        payload: true
    }
}

class SignIn extends Component{

	constructor(props){
		super(props)
		this.state={
			email:"",
			password:""
		}
	}

	onChangeValue = (event) => {
		this.setState({[event.target.name]:event.target.value})
		console.log(this.state)
	}

	onSubmit =(e)=>{
		e.preventDefault();
		console.log(this.state)
		this.props.signIn(this.state)
	}
	render(){
		console.log(this.props)
		return( 
			<div className="container">
			    <div className="row">
			      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
			        <div className="card card-signin my-5">
			          <div className="card-body">
			            <h5 className="card-title text-center">Sign In</h5>
			            <form className="form-signin" onSubmit={this.onSubmit}>
			              <div className="form-label-group">
			                <input type="email" className="form-control" required onChange={this.onChangeValue} name="email" value={ this.state.email }/>
			                <label htmlFor="inputEmail">Email</label>
			              </div>
			              <div className="form-label-group">
			                <input type="password" id="inputPassword" className="form-control" required onChange={this.onChangeValue} name="password" value={ this.state.password } />
			                <label htmlFor="inputPassword">Password</label>
			              </div>

			              <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
			              <hr className="my-4" />
			              
			            </form>
			          </div>
			        </div>
			      </div>
			    </div>
			   
			  </div>
		)
	}
}

const mapStateToProps = (state)=> {
	console.log(state.SignupR)
	return {
		isLoginError: state.SignupR.isLoginError,
		isLoginPending: state.SignupR.isLoginPending,
		isLoginSuccess: state.SignupR.isLoginSuccess
	}
}
const mapDispatchToProps = (dispatch)=>{
   return{
   		
        signIn: (data)=>{dispatch(signIn(data))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignIn);