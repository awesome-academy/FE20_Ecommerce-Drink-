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
            url: `${API + "cart/"}` + `${id}`
        }).then(function (response) {
            dispatch({
                type: types.DELETE_ITEM_CART,
                payload: id
            })
        }).then(function (error) {
        })
    }
}