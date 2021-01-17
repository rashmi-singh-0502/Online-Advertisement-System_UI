import React from 'react';
import Category from '../../models/category';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
 import '../../css/admin_login.css'; 
import AddCategoryAction from '../../actions/admin_actions/add_category'
import { useHistory } from "react-router-dom";

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
    <body>
      {/* <div class="testbox"> */}
        <form onSubmit={handleSubmit}
          onMouseMove={EnableDisable}>
            <center><h3>Add Category</h3>
          <div class-name="form-group">
           
          {/* </div> */}
       {/*    <div class="item"> */}
            <p>Category Name</p>
            <input type="name" id="name" name="name" placeholder="Enter Category Name" onBlur={validateCategoryName} />
            <small id="namevalid" class="form-text text-danger invalid-feedback">
              Category name should only contain character between 3 to 12
       </small>
       </div>
        {/*   </div>
          <div class="item"> */}
          <div class-name="form-group">
            <p>Category Description</p>
            <input type="description" id="category_desc" name="category_desc" placeholder="Enter Category Description" onBlur={validateCategoryDescription} />
            <small id="descriptionvalid" class="form-text text-danger invalid-feedback">
              Category Desciption should only contain character between 3 to 25
       </small>
          </div>
          </center>
 
          <center>
            <button class="btn btn-primary " disabled="disabled" id="btnsubmit" >ADD</button>
          </center>

        </form>
      {/* </div>*/}
    </body> 



  );
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

    history.push('/');
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


}

export default AddCategoryComponent