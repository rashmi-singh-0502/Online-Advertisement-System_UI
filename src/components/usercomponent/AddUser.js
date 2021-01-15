import React, { Component } from 'react';
import { connect } from 'react-redux';
import  addUser  from '../../actions/user_actions/userAction';

class AddUser extends Component {
    state = {
        firstName: '',
        lastName: '',
        emailId: '',
        password:'',
        phoneNo:'',
        address:''
    }

    handleTextChange = event => {
        const {target: {name, value}} = event;
        this.setState({ [name]: value });
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.addUser(this.state);
        this.setState({
            firstName: '',
            lastName: '',
            emailId: '',
            password:'',
            phoneNo:'',
            address:''
        });
    }
    render(){
        return(
            <div className="card-body">
            <form className="form">
                <h3>Get started with us today! Create your account by filling out the information below.</h3><br></br>
                <h4>
            <div className="form-inputs">
                <form onSubmit={this.handleOnSubmit}>
                    <div className="form-group">
                    <label>First Name:</label>{'\u00A0'}<input onChange={this.handleTextChange} value={this.state.firstName} type="text" name="firstName" placeholder="First Name" onBlur={validateFirstName} required/>
                    <small id="namevalid" class="form-text text-danger invalid-feedback">
                     First name should only contain characters
                    </small>
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>{'\u00A0'}<input onBlur={validateFirstName} onChange={this.handleTextChange}value={this.state.lastName} name="lastName" type="text"placeholder=" Last Name" required/>
                        <small id="namevalid" class="form-text text-danger invalid-feedback">
                     Last name should only contain characters
                    </small>
                    </div>
                    <div className="form-group">
                        <label>Email Id:</label>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}<input onBlur={validateEmail} onChange={this.handleTextChange} value={this.state.emailId} type="text" name="emailId" placeholder="Email Address" required/>
                        <small id="namevalid" class="form-text text-danger invalid-feedback">
                         Email Id must contains 1 alphabet and special character and 1 digit
                    </small>
                    </div>
                    <div className="form-group">
                        <label>Password:</label>{'\u00A0'}{'\u00A0'}<input onChange={this.handleTextChange} value={this.state.password} type="password" name="password"placeholder="Password" required/>
                    </div>
                    <div className="form-group">
                        <label>Phone No:</label>{'\u00A0'}{'\u00A0'}<input onBlur={validateNumber} onChange={this.handleTextChange} value={this.state.phoneNo} type="number" name="phoneNo" placeholder="PhoneNo" maxLength="10" required/>
                        <small id="namevalid" class="form-text text-danger invalid-feedback">
                         Mobile Number must have 10 digits
                    </small>
                    </div>
                    <div className="form-group">
                        <label>Address:</label>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}<input  onChange={this.handleTextChange} value={this.state.address} type="text" name="address" placeholder="Address" onBlur={validateFirstName} required />
                        <small id="namevalid" class="form-text text-danger invalid-feedback">
                         Address should contain only characters
                    </small>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit">Add User</button>
                    </div>
                </form>
            </div>
            </h4>
            </form>
            </div>
        );
    
    function validateNumber(event){

        const data = event.target.value;
        console.log("target",data);
       
        let regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
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


    function validateFirstName(event){

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
    function validateEmail(event){

        const data = event.target.value;
        console.log("target",data);
       
        let regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
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

export default connect(null, { addUser })(AddUser);