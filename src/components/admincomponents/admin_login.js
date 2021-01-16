import { useHistory } from "react-router-dom";
/* import Header from "./header"; */
/* import AdminServicesComponent from './components/admin-services' */
import '../../css/admin_login.css';



let history;
const Services = (props) => {
    history = useHistory();
    return(
        <div>
{/* <Header/> */}

<form  className="container shadow-none">

                {/* <h3>Log in</h3> */}

                <div className="form-group">
                    <label>Username</label>
                    <input type="username" className="form-control" placeholder="Enter username" onBlur={validateUserName} required></input>
                    <small id="namevalid" class="form-text text-danger invalid-feedback">
        username is invalid
       </small>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onBlur={validatePassword} required/>
                    <small id="namevalid" class="form-text text-danger invalid-feedback">
        Password is invalid
       </small>
                </div>

                {/* <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div> */}
 
                <button type="submit" className="btn btn-success btn-sm shadow-none" onClick={loginAdmin} href="/admin-services">Log in</button>
                <p className="forgot-password text-center">
                <a href="#">Forgot password?</a>
                </p>
            </form>
            </div>
    )
}

function loginAdmin(){
    history.push('/admin-services');
}

let validUserName=false;


function validateUserName(event){

    const data = event.target.value;
    console.log("target",data);
   
    let regex = /[a-zA-Z]{3,10}$/;
    let inputdata = data;
    let str = inputdata.trim();
    console.log(regex, str);
    if (regex.test(str) && str != "") {
  
      event.target.classList.remove('custom-invalid');
      event.target.classList.add('custom-valid');

      validUserName=true;
  
    } else {
  
      event.target.classList.remove('custom-valid');
      event.target.classList.add('custom-invalid');

      validUserName=true;
    }
};

let validPassword=false;

function validatePassword(event){

    const data = event.target.value;
    console.log("target",data);
   
    let regex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]$/;
    let inputdata = data;
    let str = inputdata.trim();
    console.log(regex, str);
    if (regex.test(str) && str != "") {
  
      event.target.classList.remove('custom-invalid');
      event.target.classList.add('custom-valid');

      validPassword=true;
  
    } else {
  
      event.target.classList.remove('custom-valid');
      event.target.classList.add('custom-invalid');

      validPassword=false;
    }


};

export default Services;