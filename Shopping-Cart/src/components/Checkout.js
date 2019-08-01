import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import {saveDeliveryAddress} from './actions/cartActions'

class Checkout extends Component{
    constructor(props){
        super(props);
        this.state={
            first_name:"",
            last_name:"",
            city:"",
            state:"",
            email:"",
            mobile:"",
            note:"",
        }
    }

    handleInputChange = (event) =>{
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
          [name]: value
        });
   }
    saveDeliveryAddress = (event) =>{
        event.preventDefault();
        this.props.saveDeliveryAddress(this.state);
    }
    render(){
        let addedItems = this.props.addedItems.length ?
            (
                this.props.addedItems.map(item=>{
                    return(
                        <li className="collection-item avatar" key={item.id}>
                            <div className="item-desc">
                                <p><span className="item">{item.title}</span><b>Price: {item.price}$</b> * {item.quantity} = <span className="total-pc">{item.price*item.quantity} </span></p>
                            </div>
                        </li>
                    )
                })
            ):
            (
                <p>No item into Cart.</p>
            )
        const Address=this.props.address;
        return(
            <div className="container">
                <div className="collection">
                    <div className="row">
                        <div className="col s6">
                            <h4 className="center">Delivery Addrerss</h4>
                            <li className="collection-item">

                                <form onSubmit={this.saveDeliveryAddress} method="POST">
                                  <div className="row">
                                    <div className="input-field col s6">
                                      <input placeholder="First Name" name="first_name" type="text" className="validate" onChange={this.handleInputChange}/>
                                      <label htmlFor="first_name">First Name</label>
                                    </div>
                                    <div className="input-field col s6">
                                      <input placeholder="Last Name" name="last_name" type="text" className="validate" onChange={this.handleInputChange}/>
                                      <label htmlFor="last_name">Last Name</label>
                                    </div>
                                  </div>
                                   <div className="row">
                                    <div className="input-field col s6">
                                      <input placeholder="Your City" name="city" type="text" className="validate"onChange={this.handleInputChange} />
                                      <label htmlFor="first_name">City</label>
                                    </div>
                                    <div className="input-field col s6">
                                      <input name="district" type="text" className="validate" placeholder="District" onChange={this.handleInputChange}/>
                                      <label htmlFor="last_name">District</label>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="input-field col s12">
                                    <select name="state" onChange={this.handleInputChange}>
                                      <option value="" >Select State</option>
                                      <option value="Punjab">Punjab</option>
                                      <option value="Himachal">Himachal</option>
                                      <option value="Hiryana">Hiryana</option>
                                    </select>
                                    <label>State</label>
                                  </div>
                                  </div>
                                  
                                  <div className="row">
                                    <div className="input-field col s12">
                                      <input name="email" placeholder="Email" type="email" className="validate" onChange={this.handleInputChange}/>
                                      <label htmlFor="email">Email</label>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="input-field col s12">
                                      <input name="mobile" placeholder="999-999-9999" type="text" className="validate" onChange={this.handleInputChange}/>
                                      <label htmlFor="email">Mobile</label>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="input-field col s12">
                                      <textarea name="note" className="materialize-textarea" onChange={this.handleInputChange}></textarea>
                                      <label htmlFor="textarea1">Note</label>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="input-field col s12">
                                      <button className="btn waves-effect waves-light btn-large" type="submit" name="action">Save
                                      </button>
                                    </div>
                                  </div>
                                </form>
                            </li>
                        </div>
                        <div className="col s6">
                            <h4  className="center">Invoice details</h4>
                            {   this.props.address !="" ?
                                    <div className="card" style={{width: "auto"}}>
                                        <div className="card-content">
                                        <span className="card-title">{Address.first_name} {Address.last_name}</span>
                                            <p><b>Address: </b>{Address.city +","+ Address.district+" ,("+ Address.state+")"}</p>
                                            <p><b>Email: </b> {Address.email}</p>
                                            <p><b>Mobile: </b> {Address.mobile}</p>
                                        </div>
                                    </div>
                                :
                                "Please enter your address"
                            }
                            {this.props.addedItems.length ?
                                <div>
                                    <ul className="collection">
                                        {addedItems}
                                    </ul>
                                    <ul className="collection">
                                        <li className="collection-item avatar">
                                            <div className="item-desc">
                                                <p><b><span className="item">Total: </span>qty: {this.props.total_cart_items}$ {this.props.total}</b></p>
                                            </div>
                                        </li>
                                    </ul>
                                     <form >
                                         Cash on delivery
                                        <button className="btn waves-effect waves-light btn-large" type="submit" name="action">Submit
                                            <i className="material-icons right">send</i>
                                          </button>
                                      </form>
                                    
                                </div>
                                :
                                ""
                            }
                        </div>
                    </div>
                </div> 
            </div>
       )
    }
}


const mapStateToProps = (state)=>{

    return{
        cartItems: state.addedItems,
        address: state.delivery_address,
        addedItems: state.addedItems,
        total:state.total,
        total_cart_items:state.total_cart_items
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        saveDeliveryAddress: (id)=>{dispatch(saveDeliveryAddress(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Checkout)