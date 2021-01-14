const initialState = [];
const globalReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_ADVERTISES':
            return action.payload;
        case 'READ_ADVERTISE_BY_TITLE':
            return action.payload;
        default:
            return [];
    }
}

export default globalReducer;