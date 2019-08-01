import React , {Component} from "react"
import {Link} from "react-router-dom"
import {connect} from "react-redux"

class Navbar extends Component{
  render(){

    return(
      <nav className="nav-wrapper">
          <div className="container">
              <Link to="/" className="brand-logo">Shopping</Link>

              <ul className="right">
                  <li><Link to="/">Shop</Link></li>
                  <li><Link to="/cart">My cart</Link></li>
                  <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                  <li><strong>Items: {this.props.total_cart_items} / {this.props.total}$</strong></li>
              </ul>
          </div>
      </nav>
    )
  }
}

const mapStateToProps = state =>{
  return {
    total:state.total,
    total_cart_items:state.total_cart_items
  }
}

export default connect(mapStateToProps)(Navbar);
