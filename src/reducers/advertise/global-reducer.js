const initialState = {};
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
        case "LIST_USERS":
                        return {...state, users: action.payload};
        case "SET_USER":
                        return {...state, userId: action.payload};
        case "ADD_USER":
                    const users = state.users.concat(action.payload);
                    return {...state, users};
        case "View_User":
            return action.payload;
        default:
                        return [];
    }
}

export default globalReducer;