import axios from 'axios';
//import category from './models/category';

let  showCategoryAction = () =>
{
    console.log("inside action");
    return async function (dispatch)
    { const res=await axios.get(
            `http://localhost:8080/cgoas/category/get`);
           console.log(res.data
            );
         dispatch({type: "SHOW_CATEGORY_LIST",payload: res.data});
           
    }
}



export default showCategoryAction;
