import axios from 'axios';

const addCategoryAction = (categoryObj) => {
    return async function(dispatch) {
        const res = await axios.post(
            "http://localhost:8080/cgoas/category",
            
                { 
                    name: categoryObj.name, 
                    category_desc:categoryObj.category_desc,
                }, 
                { 
                    "Content-type": "application/json; charset=UTF-8",
                    "Access-Control-Allow-Origin":"*"
                }

                ).then(response => {
                    return response
                 })
                 .catch(error => {
                    return Promise.reject(error.response)
                 });
        
          console.log('Add Category serverResponse: ', res.data);
          dispatch({type: "ADD_CATEGORY", payload: res.data});

    }
}
export default addCategoryAction