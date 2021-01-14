import axios from 'axios'

const SearchAction = (props)=> {
    return async function(dispatch){
        var err = null;
        var onLoad = 0;
        const axios = require('axios').default;
        const url = 'http://localhost:9091/oas1/advertise/{1}'+props;
        const serverResponse = await axios.get(url) //await can only be used with async function....
        .then(response => dispatch({type: 'SEARCH_ADVERTISE', payload: response}))
        .catch(error => console.log(err=error));
        if(err!==null && props!=undefined){
            console.log("No User Found");
            dispatch({type: 'SEARCH_ADVERTISE', payload: null});
        }
    }
}

export default SearchAction;
