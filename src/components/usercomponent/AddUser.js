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
                    <label>First Name:</label>{'\u00A0'}<input onChange={this.handleTextChange} value={this.state.firstName} type="text" name="firstName" placeholder="First Name" required/>
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>{'\u00A0'}<input onChange={this.handleTextChange}value={this.state.lastName} name="lastName" type="text"placeholder=" Last Name" required/>
                    </div>
                    <div className="form-group">
                        <label>Email Id:</label>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}<input onChange={this.handleTextChange} value={this.state.emailId} type="text" name="emailId" placeholder="Email Address" required/>
                    </div>
                    <div className="form-group">
                        <label>Password:</label>{'\u00A0'}{'\u00A0'}<input onChange={this.handleTextChange} value={this.state.password} type="password" name="password"placeholder="Password" required/>
                    </div>
                    <div className="form-group">
                        <label>Phone No:</label>{'\u00A0'}{'\u00A0'}<input onChange={this.handleTextChange} value={this.state.phoneNo} type="number" name="phoneNo" placeholder="PhoneNo" maxLength="10" required/>
                    </div>
                    <div className="form-group">
                        <label>Address:</label>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}<input onChange={this.handleTextChange} value={this.state.address} type="text" name="address" placeholder="Address" required />
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
    }
}

export default connect(null, { addUser })(AddUser);