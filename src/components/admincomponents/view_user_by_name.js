import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import ViewUserAction from '../../actions/admin_actions/view_user_by_name_action';
import '../../css/read_advertise_by_title.css'
import {useRef} from 'react';
import LogOutComponent from '../admin_logout_header';

let dispatch;
const ViewUserComponent = (props) => {
    let userList = useSelector(state => state);
    dispatch = useDispatch();

    console.log("User List: ",userList);

    if(!Array.isArray(userList)){
        userList = [];
        console.log("Set userList to blank array");
    }

    const userIdRef = useRef(null);
    const readUser = (event) => {

    }

    return(
        <div>
            <LogOutComponent></LogOutComponent>
            <center>
            <form onSubmit={handleSubmit}>
                <div className="container">
                <div className="search-box">
                    <p>Enter User Name:</p>
                    <input type="text" name="name" placeholder="Enter name "></input>
                </div>
                {/* <br></br> */}
                <div>
                    <button type="submit" className="btn-sm btn-success shadow-none">View</button>
                </div>
                </div>
                <table border="2">
                    <thead class="indigo white-text">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>EmailId</th>
                            <th>ContactNo</th>
                            {/* <th>Actions</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {renderTableData(userList)}
                    </tbody>
                </table>
                </form>
            </center>
        </div>
    );
}

function renderTableData(userList){
    console.log("userList: ",userList);
    return userList.map((userdetails, index) => {
        const userid = userdetails.userid;
        const username = userdetails.username;
        const address = userdetails.address;
        const emailid = userdetails.emailid;
        const contactno = userdetails.contactno;
        return(
            <tr key = {userid}>
                <td>{userid}</td>
                <td>{username}</td>
                <td>{address}</td>
                <td>{emailid}</td>
                <td>{contactno}</td>
               {/*  <td>
                    <button className="btn-sm btn-info shadow-none">Edit</button>
                    <button className="btn-sm btn-danger shadow-none">Delete</button>
                </td> */}
            </tr>
        )
    })
};

function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target)
    const name = data.get('name');
    console.log(name);
    if(name===''){
        alert("Name cannot be blank");
        return;
    }
    dispatch(ViewUserAction(name))


}

export default ViewUserComponent;