import api from 'services/api';
import { GET_PRODUCTS_BEGIN, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL } from "./types";

export const getProducts = () => async (dispatch) => {
    try {
        dispatch({ type: GET_PRODUCTS_BEGIN });

        const products = await api.get('products');

        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products })
    } catch (err) {
        dispatch({ type: GET_PRODUCTS_FAIL, payload: err.message });
    }
}