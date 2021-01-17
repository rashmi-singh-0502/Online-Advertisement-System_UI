import axios from 'axios';

let ViewUserAction = (name) => {
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:8080/cgoas/user/${name}`
        );

        dispatch({type: "View_User",payload:res.data});
    }
}

export default ViewUserAction;