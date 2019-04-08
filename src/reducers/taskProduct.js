import * as types from './../constants/ActionTypes'

var initialState = {
    all: [],
    menu: [],
    del: {},
    fetching: false,
    fetched: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case types.REQUEST_LOADING:
            return Object.assign({}, state, {
                fetching: true,
                fetched: initialState.fetched
            });
        case types.REQUEST_REJECTED:
            return Object.assign({}, state, {
                fetching: initialState.fetching,
                fetched: initialState.fetched,
                error: action.payload.data
            });
        case types.REQUEST_LIST_ALL:
            return Object.assign({}, state, {
                all: action.payload,
                fetching: initialState.fetching,
                fetched: true
            });
        case types.REQUEST_MENU_PRODUCT:
            return Object.assign({}, state, {
                menu: action.payload
            });
        case types.REQUEST_DETAIL_PRODUCT:
            return Object.assign({}, state, {
                del: action.payload
            });
        case types.DELETE_ITEM_CATEGORY:
            return Object.assign({}, state, {
                menu: state.menu.filter(data => data.id !== action.payload)
            });
        case types.DELETE_ITEM_PRODUCT:
            return Object.assign({}, state, {
                all: state.all.filter(data => data.id !== action.payload)
            });
        case types.REQUEST_ADD_PRODUCT:
            return Object.assign({}, state, {
                all: [...state.all, action.payload]
            });
        case types.REQUEST_ADD_CATEGORY:
            return Object.assign({}, state, {
                menu: [...state.menu, action.payload]
            });
        case types.REQUEST_EDIT_PRODUCT:
            const index = state.all.findIndex(item => item.id === action.payload.id);
            var dataEdit = [...state.all];
            dataEdit[index].name = action.payload.name;
            dataEdit[index].price = action.payload.price;
            dataEdit[index].discMin = action.payload.discMin;
            dataEdit[index].discMax = action.payload.discMax;
            return Object.assign({}, state, {
                all: dataEdit
            });
        case types.REQUEST_EDIT_CATEGORY:
            const indexc = state.menu.findIndex(item => item.id === action.payload.id);
            var dataEdit = [...state.menu];
            dataEdit[indexc].name = action.payload.name;
            return Object.assign({}, state, {
                menu: dataEdit
            });
        case types.REQUEST_MENU_PRODUCT:
            return Object.assign({}, state, {
                menu: action.payload
            });
        default:
            return state;
    }
}
