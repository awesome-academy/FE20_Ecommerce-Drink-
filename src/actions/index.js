import * as types from './../constants/ActionTypes'
import axios from 'axios';
const API = "http://localhost:3000/";

export function getListAll() {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: `${API+"products/"}`,
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
            url: `${API+"menu_products/"}`,
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