import React,{Component} from "react"
import { connect } from 'react-redux'
// import {Link} from "react-router-dom"

class AboutUs extends Component{
	render(){
		return(
			<div>
				About Us
	        </div>
		)
	}

}
const mapStateToProps = (state)=>{
    console.log(state)
 
}

export default connect(mapStateToProps)(AboutUs)
