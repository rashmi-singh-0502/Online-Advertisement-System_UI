/* Axios is a library that helps us make http requests to external resources. */

import axios from 'axios';

let ShowUsersAction = () => {
    console.log("Inside action class");
    /*   async--a function always returns a promise 
   dispatch-- is the method used to dispatch actions and trigger state changes to the store*/

    return async function (dispatch) {
        const res = await axios.get
            (`http://localhost:8080/cgoas/user`);

        console.log(res.data);

        /*  Payload is a non-official, community accepted naming convention
    for the property that holds the actual data in a Redux action object */

        dispatch({ type: "SHOW_USER_LIST", payload: res.data });

    }
}



export default ShowUsersAction;

