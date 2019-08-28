import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/pages/includes/Navbar"
import Home from "./components/pages/Home"
import AboutUs from "./components/pages/AboutUs"
import SignIn from "./components/pages/SignIn"
import SignUp from "./components/pages/SignUp"

class App extends Component {

  render() {
    return (
      <Router>
        <Navbar />
        <Route path="/" component={Home} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />

      </Router>
    );
  }
}

export default App;
