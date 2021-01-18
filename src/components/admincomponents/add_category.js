import React from 'react';
import Category from '../../models/category';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import '../../css/admin_login.css';
import AddCategoryAction from '../../actions/admin_actions/add_category'
import { useHistory } from "react-router-dom";
import LogOutComponent from '../admin_logout_header';
import FooterComponent from '../../components/footercomponent';

let set;
let dispatch;
let history;
let validCategoryName = false;
let validCategoryDesc = false;

export const AddCategoryComponent = (props) => {


  /* dispatch-- is the method used to dispatch actions and trigger state changes to the store*/
  dispatch = useDispatch();
  /*  new entry onto the history stack. */
  history = useHistory();



  return (
    <div>
      <div>
        <LogOutComponent></LogOutComponent>
      </div>
      <div>
        <br>
        </br>

        <center><h3>ADD CATGEORY</h3></center>
        <form className="container shadow-none" onSubmit={handleSubmit} onMouseMove={EnableDisable} >

          <div className="form-group">
            <p class="pr-5"><h5>Category Name:</h5></p>

            <input size="40" type="name" id="name" name="name" placeholder="Enter Category Name" onBlur={validateCategoryName} required></input>
            <small id="namevalid" class="form-text text-danger invalid-feedback">
              Category name should only contain character between 3 to 12
       </small>

          </div>

          <div className="form-group">
            <p class="pr-4"><h5>Category Description:</h5></p>
            <input size="40" type="description" id="category_desc" name="category_desc" placeholder="Enter Category Description" onBlur={validateCategoryDescription} required />
            <small id="descriptionvalid" class="form-text text-danger invalid-feedback">
              Category Desciption should only contain character between 3 to 25
       </small>
          </div>
          <br></br>

          <center>
            <button class="btn btn-primary " disabled="disabled" id="btnsubmit" >ADD</button>
          </center>

        </form>

      </div>
      <FooterComponent></FooterComponent>
    </div>
  );

}
function handleSubmit(event) {

  /*  The preventDefault() method cancels the event if it is cancelable,
     meaning that the default action that belongs to the event will not occur. */
  event.preventDefault();
  const data = new FormData(event.target);
  console.log("in handle Submit :", data)
  const name = data.get('name');
  const category_desc = data.get('category_desc');
  console.log(name);
  console.log(category_desc);
  const catObj = new Category(name, category_desc);
  console.log(catObj);
  dispatch(AddCategoryAction(catObj));

  /* redirect the user to home page */

  history.push('/admin-services');
};

function EnableDisable(event) {
  /*  The preventDefault() method cancels the event if it is cancelable,
    meaning that the default action that belongs to the event will not occur. */
  event.preventDefault();
  var btnsubmit = document.getElementById("btnsubmit");

  console.log("handle disabled called");
  console.log("validCategoryName", validCategoryName);
  console.log("validCategoryDesc", validCategoryDesc);

  /* if both the values are true  */
  if (validCategoryName && validCategoryDesc) {

    set = false;
    console.log("set", set);
    btnsubmit.disabled = false;
  }
  else {
    btnsubmit.disabled = true;
  }
}

/* 
validating category name */
function validateCategoryName(event) {

  const data = event.target.value;
  console.log("target", data);

  let regex = /[a-zA-Z]{3,10}$/;
  let inputdata = data;
  let str = inputdata.trim();
  console.log(regex, str);
  if (regex.test(str) && str != "") {

    event.target.classList.remove('custom-invalid');
    event.target.classList.add('custom-valid');
    validCategoryName = true;


  }
  else {

    event.target.classList.remove('custom-valid');
    event.target.classList.add('custom-invalid');
    validCategoryName = false;

  }
};
/* validating category description */
function validateCategoryDescription(event) {

  const data = event.target.value;
  console.log("target", data);

  let regex = /[a-zA-Z]{3,25}$/;
  let inputdata = data;
  let str = inputdata.trim();
  console.log(regex, str);

  if (regex.test(str) && str != "") {

    event.target.classList.remove('custom-invalid');
    event.target.classList.add('custom-valid');
    validCategoryDesc = true;

  }
  else {

    event.target.classList.remove('custom-valid');
    event.target.classList.add('custom-invalid');
    validCategoryDesc = false;
  }
};




export default AddCategoryComponent