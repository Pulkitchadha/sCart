import api from 'services/api';
import {
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    SEARCH_BEGIN,
    SEARCH_SUCCESS,
    SEARCH_FAIL
} from "./types";

export const getProducts = () => async (dispatch) => {
    try {
        dispatch({ type: GET_PRODUCTS_BEGIN });

        const products = await api.get('products');

        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products })
    } catch (err) {
        dispatch({ type: GET_PRODUCTS_FAIL, payload: err.message });
    }
}

export const searchProducts = (text) => async (dispatch) => {
    try {
        dispatch({ type: SEARCH_BEGIN });

        const products = await api.get('products', { title: text });

        dispatch({ type: SEARCH_SUCCESS, payload: products })
    } catch (err) {
        dispatch({ type: SEARCH_FAIL, payload: err.message });
    }
}