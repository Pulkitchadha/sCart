import api from 'services/api';
import {
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    SEARCH_BEGIN,
    SEARCH_SUCCESS,
    SEARCH_FAIL,
    APPLY_FILTER_BEGIN,
    APPLY_FILTER_SUCCESS,
    // APPLY_FILTER_FAIL,
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

export const applyFilter = (filters) => async (dispatch, getState) => {
    dispatch({ type: APPLY_FILTER_BEGIN });

    const { color = [], brand = [], price = {}, discount = {} } = filters;
    const { products: { allProducts } } = getState();

    let filteredProducts = allProducts;

    filteredProducts = filteredProducts.filter(p => {
        let addToList = true;

        if (color?.length) {
            addToList = color.includes(p?.colour?.title?.toLowerCase());
        }
        if (brand?.length) {
            addToList = brand.includes(p?.brand?.toLowerCase());
        }
        if (price?.min || price?.max) {
            addToList = p?.price?.final_price >= price?.min && p?.price?.final_price <= price?.max;
        }
        if (discount?.min || discount?.max) {
            if(discount?.min) addToList = p?.discount >= discount?.min;
            if(discount?.max) addToList = p?.discount <= discount?.max;
        }
        return addToList;
    });
    console.log({ allProducts, filters, filteredProducts });

    dispatch({ type: APPLY_FILTER_SUCCESS, payload: filteredProducts })
}