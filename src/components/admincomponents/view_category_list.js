import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../css/view_category_list.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowCategoryAction from '../../actions/admin_actions/view_category_list';
import LogOutComponent from '../admin_logout_header';
import DeleteCategoryAction from '../../actions/admin_actions/delete_category'


let dispatch;

const ViewCategoryListComponent = (props) => {

  /* dispatch-- is the method used to dispatch actions and trigger state changes to the store*/
  dispatch = useDispatch();
  /*   useSelector is a function that takes the current 
    state as an argument and returns whatever data you want from it. */
  let categoryList = useSelector(state => state);

  /*  By using useEFFECT Hook, you tell React that your component needs to do something after render */
  React.useEffect(() => {
    CategoryList()
  }, []);

  const CategoryList = () => {
    dispatch(ShowCategoryAction())
  }
  console.log("categoryList: ", categoryList);

  if (!Array.isArray(categoryList)) {
    categoryList = [];
    console.log("Set Category List to blank array");
  }

  return (
    <div>
      <LogOutComponent></LogOutComponent>
      <center>
       <h3>CATEGORY LIST</h3>
       </center>
      <center>

    

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
            {/*  render is a method that tell react what to display */}
            {renderTableData(categoryList)}
          </tbody>
        </table>

      </center>
    </div>

  );
};
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
        <td>
          &nbsp;&nbsp;&nbsp;
        <button className="btn btn-danger shadow-none" onClick={(e) => deleteCategory(e, category_id)}>Delete</button>

        </td>

      </tr>
    )
  }
  )

};

function deleteCategory(event, category_id) {
  /*  The preventDefault() method cancels the event if it is cancelable,
    meaning that the default action that belongs to the event will not occur. */
  event.preventDefault();
  console.log("categoryid", category_id);
  dispatch(DeleteCategoryAction(category_id));
  alert("Category deleted successfully");
}

export default ViewCategoryListComponent;
