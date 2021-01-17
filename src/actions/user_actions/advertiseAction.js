import axios from 'axios';

export const getAds = () => {
    return (dispatch) => {
        axios.get('http://localhost:3000/advertise')
        .then(response => {
            console.log(response);
            dispatch({
                type: 'LIST_ADS',
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error);
        });
    }
}

export const setAd = adId => {
    return {
        type: 'SET_AD',
        payload: adId
    }
}
export const addAd = adObj => {
    return (dispatch) => {
        axios.post('http://localhost:8080/oas/advertises', adObj)
        .then(response => {
            dispatch({
                type: 'ADD_ADVERTISE',
                payload: response.data
            }) 
        })
        .catch(error => {
            console.log(error);
        });
    }
}
