import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Link} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/includes/Navbar"
import AboutUs from "./components/AboutUs"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        
        <Route path="/about-us" component={AboutUs} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
       
      </Router>
    );
  }
}

export default App;
