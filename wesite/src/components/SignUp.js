import React,{Component} from "react"
import { connect } from 'react-redux'
import {Link} from "react-router-dom"
import "./SignUp.css"

const SIGN_UP = 'SIGN_UP';

function signUp(data){
    return{
        type: SIGN_UP,
        payload:data
    }
}

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
		console.log(this.state)
	}

	_handleImageChange(e) {
	    e.preventDefault();

	    let reader = new FileReader();
	    let file = e.target.files[0];

	    reader.onloadend = () => {
	      this.setState({
	        profile_pic_name: file,
	        profile_pic_url: reader.result
	      });
	    }

	    reader.readAsDataURL(file)
	}

	saveSignup = (event) => {
		event.preventDefault();
		var data =this.state
		this.props.signUp(data);
		// var data = new FormData();
  //       data.append('first_name',this.state.first_name);
  //       data.append('last_name',this.state.last_name);
  //       data.append('email',this.state.email);
  //       data.append('password',this.state.password);
  //       data.append('profile_pic',this.uploadInput.files[0]);
  //       data.append('time',Date.now());
		// console.log("jjjjj")
		//console.log("Submit: ",this.state)
	}

	render(){
		return(
			<div className="container">
			    <div className="row">
			      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
			        <div className="card card-signin my-5">
			          <div className="card-body">
			            <h5 className="card-title text-center">Sign In</h5>
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
			              <hr className="my-4" />
			              {/*<button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Sign in with Google</button>
			              <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button> */}
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
    return(state)
}

const mapDispatchToProps = (dispatch)=>{
   return{
        signUp: (data)=>{dispatch(signUp(data))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
