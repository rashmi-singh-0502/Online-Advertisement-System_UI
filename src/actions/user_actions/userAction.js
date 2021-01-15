import axios from 'axios';

const addUser = (userObj) => {
    return async function(dispatch) {
        const res = await axios.post(
            "http://localhost:8080/oas1/users",
            {
                firstName: userObj.firstName,
                lastName: userObj.lastName,
                emailId: userObj.emailId,
                password: userObj.password,
                phoneNo:userObj.phoneNo,
                address:userObj.address 
            },
            {
                "content-type": "application/json; charset=UTF-8",
                "Access-Control-Allow-Origin":"*"
            }
        );
        console.log('Add New User serverResponse:',res.data);
        dispatch({type: "ADD_USER", payload: res.data});
    }
}
export default addUser;