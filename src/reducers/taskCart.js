import * as types from './../constants/ActionTypes'

var initialState = {
    all: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case types.ADD_TOCART:
            return Object.assign({}, state, {
                all: [...state.all, action.payload],
            });
        case types.REQUEST_LIST_CART:
            return Object.assign({}, state, {
                all: action.payload
            });
        case types.DELETE_ITEM_CART:
            return Object.assign({}, state, {
                all: state.all.filter(data => data.id !== action.payload)
            });
        default:
            return state;
    }
}
