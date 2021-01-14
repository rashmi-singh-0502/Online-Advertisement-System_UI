const initialState = [];
const globalReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_ADVERTISES':
            return action.payload;
            case 'ADD_CATEGORY':
                console.log("category add in reducer",action.payload);
                return action.payload;
                case 'SHOW_CATEGORY_LIST':
                    console.log("category view in reducer",action.payload);
                    return action.payload;
            
        case 'READ_ADVERTISE_BY_TITLE':
            return action.payload;
            
        case 'SEARCH_ADVERTISE':
            return action.payload;
        default:
            return [];
    }
}

export default globalReducer;