import React,{Component} from "react"
import { connect } from 'react-redux'
import "./SignUp.css"
import {ApiCalls} from "../config"


const signIn = (data) => {
	return dispatch => {
		dispatch({
				type: "SET_LOADING",
				payload: {key:'isLoginPending',state:true}
		});
		setTimeout(() => {
			ApiCalls.SignInUser(data)
			.then(res=>{
				dispatch({
						type: "SIGN_IN",
						payload: res
				});
			})
			.catch(err=>{
				dispatch({
						type: "Check_Server",
						payload: true
				});
			})
		},500);
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
	}

	onSubmit =(e)=>{
		e.preventDefault();
		this.props.signIn(this.state)
	}
	render(){
		let {isServerError,isLoginError,isLoginPending,isLoginSuccess}=this.props;
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
										<p className="links"><a href="/sign-up">No Account</a></p>
										<div className="message">
											 { isLoginPending && !isServerError && <img alt="loading" src="dist/img/loading.gif"/>}
											 { isServerError && <p className="error">Server not working (:</p>}
											 { isLoginSuccess && <div className="success">{isLoginSuccess}</div> }
											 { isLoginError && <div className="error">{isLoginError}</div> }
									 	</div>
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
	console.log(state)
	return {
		isServerError: state.Common.isServerError,
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
