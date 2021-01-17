import axios from 'axios'

const SearchAction = (title) => {
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:8080/cgoas/advertise/get/title/${title}`
        );

        dispatch({type: "SEARCH_ADVERTISE",payload:res.data});
    }
}

export default SearchAction;
