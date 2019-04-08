import * as types from './../constants/ActionTypes'

var initialState = {
    user: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case types.REQUEST_LIST_USERS:
            return Object.assign({}, state, {
                user: action.payload
            });
        case types.DELETE_ITEM_USER:
            return Object.assign({}, state, {
                user: state.user.filter(data => data.id !== action.payload)
            });
        case types.REQUEST_ADD_USER:
            return Object.assign({}, state, {
                user: [...state.user, action.payload]
            });
        case types.REQUEST_EDIT_USER:
            const index = state.user.findIndex(item => item.id === action.payload.id);
            var dataEdit = [...state.user];
            dataEdit[index].firstName = action.payload.firstName;
            dataEdit[index].lastName = action.payload.lastName;
            dataEdit[index].email = action.payload.email;
            dataEdit[index].level = action.payload.level;
            return Object.assign({}, state, {
                user: dataEdit
            });
        default:
            return state;
    }
}
