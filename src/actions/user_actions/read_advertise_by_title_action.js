import axios from 'axios';

let ReadByAdvertiseTitleAction = (title) => {
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:8080/cgoas/advertise/get/title/${title}`
        );

        dispatch({type: "READ_ADVERTISE_BY_TITLE",payload:res.data});
    }
}

export default ReadByAdvertiseTitleAction;