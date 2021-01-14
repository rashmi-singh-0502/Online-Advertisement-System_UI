const initialState = [];
const globalReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_ADVERTISES':
            return action.payload;
        default:
            return [];
    }
}

export default globalReducer;