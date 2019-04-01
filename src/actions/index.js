import * as types from './../constants/ActionTypes'
import axios from 'axios';
const API = "http://localhost:3000/";

export function getListAll() {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: `${API + "products/"}`,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            dispatch({
                type: types.REQUEST_LIST_ALL,
                payload: response.data
            })
        }).then(function (error) {
        })
    }
}
export function getMenu() {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: `${API + "menu_products/"}`,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            dispatch({
                type: types.REQUEST_MENU_PRODUCT,
                payload: response.data
            })
        }).then(function (error) {
        })
    }
}

export function onAddToCart(product) {
    return (dispatch) => {
        axios({
            method: 'POST',
            url: `${API + "cart/"}`,
            data: product
        }).then(function (response) {
            dispatch({
                type: types.ADD_TOCART,
                payload: response.data
            })
        }).then(function (error) {
            console.log(error);
        })
    }
}
export function getListCart() {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: `${API + "cart/"}`,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            dispatch({
                type: types.REQUEST_LIST_CART,
                payload: response.data,
            })
        }).then(function (error) {
        })
    }
}
export function getDelete(id) {
    return (dispatch) => {
        axios({
            method: 'DELETE',
            url: `${API + "cart/" + id}`
        }).then(function (response) {
            dispatch({
                type: types.DELETE_ITEM_CART,
                payload: id
            })
        }).then(function (error) {
        })
    }
}
export function getDetail(id) {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: `${API + "products/" + id}`
        }).then(function (response) {
            dispatch({
                type: types.REQUEST_DETAIL_PRODUCT,
                payload: response.data,
            })
        }).then(function (error) {
        })
    }
}
export function getUsers() {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: `${API + "accounts/"}`
        }).then(function (response) {
            dispatch({
                type: types.REQUEST_LIST_USERS,
                payload: response.data,
            })
        }).then(function (error) {
        })
    }
}
export function getDeleteUser(id) {
    return (dispatch) => {
        axios({
            method: 'DELETE',
            url: `${API + "accounts/" + id}`
        }).then(function (response) {
            dispatch({
                type: types.DELETE_ITEM_USER,
                payload: id
            })
        }).then(function (error) {
        })
    }
}
export function getDeleteMenu(id) {
    return (dispatch) => {
        axios({
            method: 'DELETE',
            url: `${API + "menu_products/" + id}`
        }).then(function (response) {
            dispatch({
                type: types.DELETE_ITEM_CATEGORY,
                payload: id
            })
        }).then(function (error) {
        })
    }
}
export function getDeleteProduct(id) {
    return (dispatch) => {
        axios({
            method: 'DELETE',
            url: `${API + "products/" + id}`
        }).then(function (response) {
            dispatch({
                type: types.DELETE_ITEM_PRODUCT,
                payload: id
            })
        }).then(function (error) {
        })
    }
}
export function requestAddProduct(data) {
    return (dispatch) => {
        axios({
            method: 'POST',
            url: `${API + "products/"}`,
            data: {
                "name": data.name,
                "price": data.price,
                "discMin": data.discMin,
                "discMax": data.discMax,
                "rating": 4,
                "urlImage": './../image/hotproduct_3.png'
            }
        }).then(function (response) {
            dispatch({
                type: types.REQUEST_ADD_PRODUCT,
                payload: response.data,
            })
        }).then(function (error) {
        })
    }
}
export function requestAddUser(data) {
    return (dispatch) => {
        axios({
            method: 'POST',
            url: `${API + "accounts/"}`,
            data: {
                "firstName": data.firstName,
                "lastName": data.lastName,
                "email": data.email,
                "level": data.level
            }
        }).then(function (response) {
            dispatch({
                type: types.REQUEST_ADD_USER,
                payload: response.data,
            })
        }).then(function (error) {
        })
    }
}
export function requestAddCategory(data) {
    return (dispatch) => {
        axios({
            method: 'POST',
            url: `${API + "menu_products/"}`,
            data: {
                "name": data.name
            }
        }).then(function (response) {
            dispatch({
                type: types.REQUEST_ADD_CATEGORY,
                payload: response.data,
            })
        }).then(function (error) {
        })
    }
}

export function requestUpdateProduct(data) {
    return (dispatch) => {
        axios({
            method: 'PUT',
            url: `${API + "products/" + data.id}`,
            data: {
                "name": data.name,
                "price": data.price,
                "discMin": data.discMin,
                "discMax": data.discMax,
                "rating": 4,
                "urlImage": './../image/hotproduct_3.png'
            }
        }).then(function (response) {
            dispatch({
                type: types.REQUEST_EDIT_PRODUCT,
                payload: response.data,
            })
        }).then(function (error) {
        })
    }
}
export function requestUpdateCategory(data) {
    return (dispatch) => {
        axios({
            method: 'PUT',
            url: `${API + "menu_products/" + data.id}`,
            data: {
                "name": data.name
            }
        }).then(function (response) {
            dispatch({
                type: types.REQUEST_EDIT_CATEGORY,
                payload: response.data,
            })
        }).then(function (error) {
        })
    }
}
export function requestUpdateUser(data) {
    return (dispatch) => {
        axios({
            method: 'PUT',
            url: `${API + "accounts/" + data.id}`,
            data: {
                "firstName": data.firstName,
                "lastName":data.lastName,
                "email": data.email,
                "level": data.level
            }
        }).then(function (response) {
            dispatch({
                type: types.REQUEST_EDIT_USER,
                payload: response.data,
            })
        }).then(function (error) {
        })
    }
}

export function requestLoading() {
    return { type: types.REQUEST_LOADING };
}
export function requestRejected(response) {
    return { type: types.REQUEST_REJECTED, payload: response };
}
