import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ShowUsersAction from '../../actions/admin_actions/view_user_list';
import DeleteUserAction from '../../actions/admin_actions/delete_user'
import LogOutComponent from '../admin_logout_header'
import FooterComponent from '../../components/footercomponent';



let dispatch;
const ShowUsers = (props) => {

    /*   useSelector is a function that takes the current 
        state as an argument and returns whatever data you want from it. */
    let userList = useSelector(state => state);
    /* dispatch-- is the method used to dispatch actions and trigger state changes to the store*/
    dispatch = useDispatch();
    /*  By using useEFFECT Hook, you tell React that your component needs to do something after render */
    React.useEffect(() => {
        UserList()
    }, []);

    const UserList = () => {
        dispatch(ShowUsersAction())
    }
    console.log("userList: ", userList);
    if (!Array.isArray(userList)) {
        userList = [];
        console.log("Set userList to blank array");
    }
    return (<div>
        <LogOutComponent></LogOutComponent>
        <center>
            <br></br>
            <h3>USER LIST</h3>
            <br></br>
            <table border="2">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>ContactNo</th>
                        <th>EmailId</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/*  render is a method that tell react what to display */}
                    {renderTableData(userList)}
                </tbody>
            </table>
        </center>
        <FooterComponent></FooterComponent>
    </div>);
};

function renderTableData(userList) {
    console.log("userList: ", userList);
    return userList.map((user, index) => {
        //destructuring
        const { user_id, name, user_address, user_contactno, user_email } = user
        return (
            <tr key={user_id}>
                <td>{user_id}</td>
                <td>{name}</td>
                <td>{user_address}</td>
                <td>{user_contactno}</td>
                <td>{user_email}</td>
                <td>
                    &nbsp;&nbsp;&nbsp;

                    <button className="btn btn-danger shadow-none" onClick={(e) => deleteUser(e, user_id)}><span className="glyphicon glyphicon-trash" aria-hidden="true" title="Delete Category">Delete</span></button>

                </td>


            </tr>
        )
    })
};
/* This function deletes user using id */
function deleteUser(event, user_id) {
    /*  The preventDefault() method cancels the event if it is cancelable,
     meaning that the default action that belongs to the event will not occur. */
    event.preventDefault();
    console.log("id", user_id);
    dispatch(DeleteUserAction(user_id));
    alert("User deleted successfully");
}

export default ShowUsers