import * as types from './../constants/ActionTypes'

var initialState = {
    all: [],
    menu: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case types.REQUEST_LIST_ALL:
            return Object.assign({}, state, {
                all: action.payload
            });
        case types.REQUEST_MENU_PRODUCT:
            return Object.assign({}, state, {
                menu: action.payload
            });
        default:
            return state;
    }
}
