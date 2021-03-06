import { useHistory } from "react-router-dom";
import '../../css/admin_login.css';
import HeaderComponent from '../header';
import FooterComponent from '../../components/footercomponent';
let history;
let validUserName = false;
let validPassword = false;
let set;

const UserServices = (props) => {
  history = useHistory();
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <form className="container shadow-none" onSubmit={loginUser} onMouseMove={EnableDisable}>
        <div className="form-group">
          <label>Username</label>
          <input type="username" className="form-control" placeholder="Enter username" onBlur={validateUserName} required></input>
          <small id="namevalid" class="form-text text-danger invalid-feedback">
            Username is invalid
       </small>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" onBlur={validatePassword} required />
          <small id="namevalid" class="form-text text-danger invalid-feedback">
            Password is invalid
       </small>
        </div>

        <button  class="btn btn-primary "  id="btnsubmit" disabled="disabled">Log in</button>
        <p className="forgot-password text-center">
          <a href="#">Forgot password?</a>
        </p>

        <p>New User?</p>
        <button type="submit" className="btn-success btn-sm shadow-none" onClick={registerUser}>Register</button>
      </form>
      <FooterComponent></FooterComponent>
    </div>
  )
}

function loginUser() {
  history.push('/user-services');
}

function registerUser() {
  history.push('/registeruser');
}

function EnableDisable(event) {
  event.preventDefault();
  var btnsubmit = document.getElementById("btnsubmit");
  console.log("handle disabled called");
  console.log("validUserName", validUserName);
  console.log("validPassword", validPassword);

  if (validUserName && validPassword) {
    set = false;
    console.log("set", set);
    btnsubmit.disabled = false;
  }
  else {
    btnsubmit.disabled = true;
  }
}

function validateUserName(event) {
  const data = event.target.value;
  console.log("target", data);

  if (data != "") {
    event.target.classList.remove('custom-invalid');
    event.target.classList.add('custom-valid');

    validUserName = true;

  } else {
    event.target.classList.remove('custom-valid');
    event.target.classList.add('custom-invalid');

    validUserName = false;
  }
};

function validatePassword(event) {
  const data = event.target.value;
  console.log("target", data);

  if (data != "") {
    event.target.classList.remove('custom-invalid');
    event.target.classList.add('custom-valid');

    validPassword = true;

  } else {

    event.target.classList.remove('custom-valid');
    event.target.classList.add('custom-invalid');

    validPassword = false;
  }
};

export default UserServices;