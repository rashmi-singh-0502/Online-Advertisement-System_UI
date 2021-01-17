import axios from 'axios';

const DeleteAdvertiseAction = (ad_id) => {
    return async function(dispatch) {
        const res = await axios.delete(
            `http://localhost:8080/cgoas/advertise/advertiseid/${ad_id}`, { 
                headers: { 
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
          console.log('Delete Advertise serverResponse: ', res.data);
          dispatch({type: "DELETE_ADVERTISE", payload: res.data});

    }
}

export default DeleteAdvertiseAction;
