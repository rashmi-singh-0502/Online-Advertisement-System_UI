import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addAd}  from '../../actions/user_actions/advertiseAction';
import LogOutComponent from '../user_logout_header'
class AddAd extends Component {
    state = {
        title: '',
        category: '',
        description: '',
        price:''
    }

    handleTextChange = event => {
        const {target: {name, value}} = event;
        this.setState({ [name]: value });
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.addAd(this.state);
        this.setState({
            title: '',
            category: '',
            description: '',
            price:''
        });
    }

    render(){
        return(
            <div>
                <LogOutComponent></LogOutComponent>
            <div className="card-body">
            <div className="form-container">
                <form onSubmit={this.handleOnSubmit}>
                    <div className="form-group">
                        <label>Advertise Title:</label>{'\u00A0'}<input onBlur={validateTitle} onChange={this.handleTextChange}value={this.state.title} name="title" type="text" className="form-control" placeholder="Advertise Title" required/>
                        <small id="namevalid" class="form-text text-danger invalid-feedback">
                     Title should only contain characters
                    </small>
                    </div>
                    <div className="form-group">
                        <label>Advertise Category:</label>{'\u00A0'}<input onBlur={validateTitle} onChange={this.handleTextChange}value={this.state.category} name="category" type="text" className="form-control" placeholder="Advertise category" required/>
                        <small id="namevalid" class="form-text text-danger invalid-feedback">
                     Title should only contain characters
                    </small>
                    </div>
                    <div className="form-group">
                        <label>Description:</label>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}<input onBlur={validateTitle} onChange={this.handleTextChange} value={this.state.description} type="text" className="form-control" name="description" placeholder="Advertise Title" required/>
                        <small id="namevalid" class="form-text text-danger invalid-feedback">
                         Description should contain only characters
                    </small>
                    </div>
                    <div className="form-group">
                        <label>Price:</label>{'\u00A0'}{'\u00A0'}<input onChange={this.handleTextChange} value={this.state.price} type="number" className="form-control" name="price"placeholder="price" onBlur={validateprice} required/>
                        <small id="namevalid" class="form-text text-danger invalid-feedback">
                         Please enter valid amount
                    </small>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success" type="submit">Add Advertise</button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        );
        function validateprice(event){

            const data = event.target.value;
            console.log("target",data);
           
            let regex = /^[0-9]$/;
            let inputdata = data;
            let str = inputdata.trim();
            console.log(regex, str);
            if (regex.test(str) && str != "") {
          
              event.target.classList.remove('custom-invalid');
              event.target.classList.add('custom-valid');
          
            } else {
          
              event.target.classList.remove('custom-valid');
              event.target.classList.add('custom-invalid');
            }
        }
    
    
        function validateTitle(event){
    
            const data = event.target.value;
            console.log("target",data);
           
            let regex = /[a-zA-Z]$/;
            let inputdata = data;
            let str = inputdata.trim();
            console.log(regex, str);
            if (regex.test(str) && str != "") {
          
              event.target.classList.remove('custom-invalid');
              event.target.classList.add('custom-valid');
          
            } else {
          
              event.target.classList.remove('custom-valid');
              event.target.classList.add('custom-invalid');
            }
        };
    }
}

export default connect(null, { addAd })(AddAd);