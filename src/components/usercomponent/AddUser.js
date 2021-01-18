import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutComponent from '../user_logout_header';
import { addUser } from '../../actions/user_actions/userAction';
import FooterComponent from '../../components/footercomponent';
class AddUser extends Component {
    state = {
        firstName: '',
        lastName: '',
        emailId: '',
        password: '',
        phoneNo: '',
        address: ''
    }

    handleTextChange = event => {
        const { target: { name, value } } = event;
        this.setState({ [name]: value });
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.addUser(this.state);
        this.setState({
            firstName: '',
            lastName: '',
            emailId: '',
            password: '',
            phoneNo: '',
            address: ''
        });
    }

    render() {
        return (
            <div>
                <LogOutComponent></LogOutComponent>
                <div className="card-body">
                    <form className="form">
                        <h3>Get started with us today! Create your account by filling out the information below.</h3><br></br>
                        <h4>
                            <div className="form-container">
                                <form onSubmit={this.handleOnSubmit}>
                                    <div className="form-group">
                                        <label>First Name:</label>{'\u00A0'}<input onChange={this.handleTextChange} value={this.state.firstName} type="text" name="firstName" className="form-control" placeholder="First Name" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name:</label>{'\u00A0'}<input onChange={this.handleTextChange} value={this.state.lastName} name="lastName" type="text" placeholder=" Last Name" className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Email Id:</label>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}<input onChange={this.handleTextChange} value={this.state.emailId} type="text" name="emailId" className="form-control" placeholder="Email Address" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Password:</label>{'\u00A0'}{'\u00A0'}<input onChange={this.handleTextChange} value={this.state.password} type="password" name="password" placeholder="Password" className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone No:</label>{'\u00A0'}{'\u00A0'}<input onChange={this.handleTextChange} value={this.state.phoneNo} type="number" name="phoneNo" placeholder="PhoneNo" className="form-control" maxLength="10" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Address:</label>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}<input onChange={this.handleTextChange} value={this.state.address} type="text" name="address" className="form-control" placeholder="Address" required />
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-primary" type="submit">Add User</button>
                                    </div>
                                </form>
                            </div>
                        </h4>
                    </form>
                </div>
                <FooterComponent></FooterComponent>
            </div>
        );
    }
}

export default connect(null, { addUser })(AddUser);