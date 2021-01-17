import React from 'react';
import {useSelector, useDispatch } from 'react-redux';
import '../../css/view_category_list.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowCategoryAction from '../../actions/admin_actions/view_category_list';
import LogOutComponent from '../admin_logout_header';


let dispatch ;

 const ViewCategoryListComponent = (props) => {
    dispatch = useDispatch();
    let categoryList = useSelector(state => state);
    

    React.useEffect(() => {
        CategoryList()
      }, []);
    
      const CategoryList = () => {
    dispatch(ShowCategoryAction())
      }
      console.log("categoryList: ", categoryList);
    if(!Array.isArray(categoryList)) {
        categoryList = [];
        console.log("Set Category List to blank array");
    }
    return(
<div>
<LogOutComponent></LogOutComponent>
<center>
    {/* <form action="/"> */}
  
    <table border="4">
        <thead class="indigo white-text">
            <tr>
              
            <th>Category Id</th>
                     <th>Category Name</th>
                     <th>Category Description</th>
                     <th>Actions</th>
              
            </tr>
        </thead>
        <tbody>
        {renderTableData(categoryList)}
        </tbody>
    </table>
    {/* </form> */}
</center>
</div>
);
};
function renderTableData(categoryList) {
    console.log("categoryList: ", categoryList);
    return categoryList.map((category, index) => {
       const {category_id, name, category_desc } = category //destructuring
       return (
          <tr key={category_id}>
             <td>{category_id}</td>
             <td>{name}</td>
             <td>{category_desc}</td>
             <td>
             &nbsp;&nbsp;&nbsp;
{/*<button className="btn btn-info  shadow-none"><span className="glyphicon glyphicon-edit" aria-hidden="true" title="Edit Category">Edit</span></button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}
                    <button className="btn btn-danger shadow-none" ><span className="glyphicon glyphicon-trash" aria-hidden="true" title="Delete Category">Delete</span></button>
                 
             </td>
             
          </tr>
       )}
    )
    
 };

export default ViewCategoryListComponent;
