/* Axios is a library that helps us make http requests to external resources. */

import axios from 'axios';


const DeleteCategoryAction = (category_id) => {

    /*   async--a function always returns a promise 
    dispatch-- is the method used to dispatch actions and trigger state changes to the store*/
    return async function(dispatch) 
    {
        const res = await axios.delete
        (
            `http://localhost:8080/cgoas/category/${category_id}`, 
            { 
                /*  headers indicate the allowed and preferred formats of the response */
                headers: 
                { 
                    "Content-type": "application/json; charset=UTF-8"
                }
            }
        );

          console.log('Delete Category serverResponse: ', res.data);
           /*  Payload is a non-official, community accepted naming convention
          for the property that holds the actual data in a Redux action object */
          
          dispatch({type:"DELETE_CATEGORY", payload: res.data});

    }
}

export default DeleteCategoryAction;