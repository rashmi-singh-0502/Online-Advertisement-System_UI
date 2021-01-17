import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ViewByCategoryNameAction from '../../actions/admin_actions/view_by_category_name';
import '../../css/view_category_by_name.css'


let dispatch;
let set;
let validCategoryName = false;
const ViewCategoryByNameComponent = (props) => {

    /*   useSelector is a function that takes the current 
      state as an argument and returns whatever data you want from it. */
    let categoryList = useSelector(state => state);
    /* dispatch-- is the method used to dispatch actions and trigger state changes to the store*/
    dispatch = useDispatch();


    console.log("categoryList: ", categoryList);
    if (!Array.isArray(categoryList)) {
        categoryList = [];
        console.log("Set Category List to blank array");
    }

    return (
        <div>
            <center>
                <form onSubmit={handleSubmit} onMouseMove={EnableDisable}>
                    <div className="container">
                        <div className="search-box">
                            <p>Enter Category Name:</p>
                            <input type="text" name="title" placeholder="Enter Category Name" onBlur={validateCategoryName}></input>
                            <small id="namevalid" class="form-text text-danger invalid-feedback">
                                Category name should only contain character between 3 to 12
       </small>
                        </div>

                        <center>
                            <button class="btn btn-primary" id="btnsubmit" disabled="disabled">View</button>
                        </center>
                    </div>
                    <table border="2">
                        <thead class="indigo white-text">
                            <tr>
                                <th>Category Id</th>
                                <th>Category Name</th>
                                <th>Category Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderTableData(categoryList)}
                        </tbody>
                    </table>
                </form>
            </center>
        </div>
    );
}


function renderTableData(categoryList) {
    console.log("categoryList: ", categoryList);
    return categoryList.map((category, index) => {
        //destructuring
        const { category_id, name, category_desc } = category
        return (
            <tr key={category_id}>
                <td>{category_id}</td>
                <td>{name}</td>
                <td>{category_desc}</td>

            </tr>
        )
    }
    )

};
function EnableDisable(event) {

    /*  The preventDefault() method cancels the event if it is cancelable,
       meaning that the default action that belongs to the event will not occur. */
    event.preventDefault();
    var btnsubmit = document.getElementById("btnsubmit");

    console.log("handle disabled called");
    console.log("validCategoryName", validCategoryName);


    if (validCategoryName) {
        set = false;
        console.log("set", set);
        btnsubmit.disabled = false;
    }
    else {
        btnsubmit.disabled = true;
    }
}

function handleSubmit(event) {


    /*  The preventDefault() method cancels the event if it is cancelable,
       meaning that the default action that belongs to the event will not occur. */
    event.preventDefault();
    const data = new FormData(event.target)
    const title = data.get('title');
    console.log(title);
    dispatch(ViewByCategoryNameAction(title))
}

/* validating category Name */
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


    } else {

        event.target.classList.remove('custom-valid');
        event.target.classList.add('custom-invalid');
        validCategoryName = false;

    }
};

export default ViewCategoryByNameComponent;