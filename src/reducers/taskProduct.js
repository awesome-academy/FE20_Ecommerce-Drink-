import * as types from './../constants/ActionTypes'

var initialState = {
    all: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case types.REQUEST_LIST_ALL:
            return Object.assign({}, state, {
                all: action.payload
            });
        default:
            return state;
    }
}
