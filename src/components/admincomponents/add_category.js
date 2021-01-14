import React from 'react';
import { useRef } from 'react';
import Category from '../../models/category';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch,useSelector } from 'react-redux';
import  '../../css/add_category.css';
import addCategoryAction from '../../actions/admin_actions/view_category_list';
import { useHistory } from "react-router-dom";


let dispatch;
let history;
export const AddCategoryComponent = (props) =>{
    
      dispatch = useDispatch();
    history = useHistory();
    let categoryList = useSelector(state => state.globalReducer);

    dispatch(addCategoryAction());
   console.log("categoryList in comp: ", categoryList);
   
     

   return(
       <body>
        <div class="testbox">
        <form onSubmit={handleSubmit}>
            
                <div class="banner">
                    <h1>Add Category</h1>
                </div>
                <div class="item">
                    <p>Category Name</p>
                        <input type="text" name="name" placeholder="Enter Category Name" onBlur={validateCategoryName} />
                        <small id="namevalid" class="form-text text-danger invalid-feedback">
        Candidate name should only contain character between 3 to 12
       </small>
                </div>
                <div class="item">
                    <p>Category Description</p>
                    <input type="text" name="desc" placeholder="Enter Category Description" onBlur={validateCategoryDescription}/>
                    <small id="descriptionvalid" class="form-text text-danger invalid-feedback">
        Candidate Desciption should only contain character between 3 to 25
       </small>
                </div>
                <div class="btn-block">
          <button type="submit" class="btn btn-primary" >ADD </button>
        </div>
            </form>
        </div>
     </body>
  
       
       
    );
   

    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log("in handle Submit :",data)
        const name = data.get('name');
        const category_desc = data.get('category_desc');
        console.log(name);
        console.log(category_desc);
        const catObj = new Category(name, category_desc);
        dispatch(addCategoryAction(catObj));
        history.push('/');
    };
    function validateCategoryName(event){

        const data = event.target.value;
        console.log("target",data);
       
        let regex = /[a-zA-Z]{3,10}$/;
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
    function validateCategoryDescription(event){

        const data = event.target.value;
        console.log("target",data);
       
        let regex = /[a-zA-Z]{3,25}$/;
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

export default AddCategoryComponent