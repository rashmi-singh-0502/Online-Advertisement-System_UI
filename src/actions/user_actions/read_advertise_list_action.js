import axios from 'axios';

let getAdvertiseListAction = (props) =>
{
    return async function (dispatch)
    {
        await axios.get(
            `http://localhost:8080/cgoas/advertise/getall`)
            .then(res => {dispatch({type: "GET_ADVERTISES",payload: res.data})});
    }
};

export default getAdvertiseListAction;

/* /${props.ad_id}/${props.title}/${props.category}/${props.description}/${props.price} */