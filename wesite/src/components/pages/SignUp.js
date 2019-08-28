import React,{Component} from "react"
import { connect } from 'react-redux'
import "./SignUp.css"
import {signUp} from "../actions/auth"

class SignUp extends Component{

	constructor(props){
		super(props)
		this.state={
			first_name:"",
			last_name:"",
			email:"",
			profile_pic_name:"",
			profile_pic_url:"",
			password:""
		}

	}

	onChangeValue = (event) => {
		if(!event.target.files){
			this.setState({[event.target.name]:event.target.value})
		}
	}

	_handleImageChange(e) {
	    e.preventDefault();

	    let reader = new FileReader();
	    let file = e.target.files[0];

	    reader.onloadend = () => {
	      this.setState({
	        profile_pic_name: file.name,
	        profile_pic_url: reader.result
	      });
	    }

	    reader.readAsDataURL(file)
	}

	saveSignup = (event) => {
		event.preventDefault();
		var data =this.state
		this.props.signUp(data);
	}

	render(){
		let {isSignUpPending, isSignUpSuccess, isSignUpError, isServerError} = this.props;

		return(
			<div className="container">
			    <div className="row">
			      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
			        <div className="card card-signin my-5">
			          <div className="card-body">
			            <h5 className="card-title text-center">Sign Up</h5>
			            <form className="form-signin" onSubmit={this.saveSignup}>
			              <div className="form-label-group">
			                <input type="text" className="form-control" onChange={this.onChangeValue} name="first_name" value={ this.state.first_name } required  />
			                <label htmlFor="inputEmail">First Name</label>
			              </div>
			               <div className="form-label-group">
			                <input type="text" className="form-control" required onChange={this.onChangeValue} name="last_name" value={ this.state.last_name } />
			                <label htmlFor="inputEmail">Last Name</label>
			              </div>
			               <div className="form-label-group">
			                <input type="email" className="form-control" required onChange={this.onChangeValue} name="email" value={ this.state.email }/>
			                <label htmlFor="inputEmail">Email</label>
			              </div>

			               <div className="form-label-group">
			                <input type="file" placeholder="Image" name="profile_pic"  onChange={(e)=>this._handleImageChange(e)} className="form-control"/>
			                <label htmlFor="inputEmail">Profile Pic</label>
			              </div>
			              <div className="form-label-group">
			                <input type="password" id="inputPassword" className="form-control" required onChange={this.onChangeValue} name="password" value={ this.state.password } />
			                <label htmlFor="inputPassword">Password</label>
			              </div>

			              <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
										<p className="links"><a href="/sign-in">Already account login here</a></p>
			              {/*<button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Sign in with Google</button>
			              <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button> */}
			             <div className="message">

				          { isSignUpPending && !isServerError && <img alt="loading" src="dist/img/loading.gif"/>}
				          { isServerError && <p className="error">Server not working (:</p>}
				          { isSignUpSuccess && <div className="success">{isSignUpSuccess}</div> }
				          { isSignUpError && <div className="error">{isSignUpError}</div> }
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

const mapStateToProps = (state)=>{
	console.log(state)
	return {
	    isSignUpPending: state.SignupR.isSignUpPending,
	    isSignUpSuccess: state.SignupR.isSignUpSuccess,
	    isSignUpError: state.SignupR.isSignUpError,
	    isServerError: state.Common.isServerError
	};
}

const mapDispatchToProps = (dispatch)=>{
   return{
        signUp: (data)=>{dispatch(signUp(data))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
