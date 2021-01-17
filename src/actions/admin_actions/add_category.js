
/* Axios is a library that helps us make http requests to external resources. */
import axios from 'axios';

const AddCategoryAction = (categoryObj) => {
    console.log("In action class", categoryObj);

    /*   async--a function always returns a promise 
    dispatch-- is the method used to dispatch actions and trigger state changes to the store*/

    return async function (dispatch) {

        console.log("inactionaction", categoryObj.name, categoryObj.category_desc);

        const res = await axios.post
            (
                "http://localhost:8080/cgoas/category/get",

                {
                    name: categoryObj.name,
                    category_desc: categoryObj.category_desc,
                },
                {
                    /* This is use to automatically convert the request body into a JavaScript object */
                    "Content-type": "application/json; charset=UTF-8",
                    "Access-Control-Allow-Origin": "*"
                }


            )

        console.log('Add Category serverResponse: ', res.data);

        /*  Payload is a non-official, community accepted naming convention
          for the property that holds the actual data in a Redux action object */

        dispatch({ type: "ADD_CATEGORY", payload: res.data });

    }
}

export default AddCategoryAction