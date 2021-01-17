/* Axios is a library that helps us make http requests to external resources. */

import axios from 'axios';

let ViewByCategoryNameAction = (categoryname) => {
    /*   async--a function always returns a promise 
    dispatch-- is the method used to dispatch actions and trigger state changes to the store*/


    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:8080/cgoas/category/${categoryname}`
        );


        /*  Payload is a non-official, community accepted naming convention
          for the property that holds the actual data in a Redux action object */

        dispatch({ type: "VIEW_CATEGORY", payload: res.data });
    }
}

export default ViewByCategoryNameAction;