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
        let isColorValid = true;
        let isBrandValid = true;
        let isPriceValid = true;
        let isDiscount = true;

        if (color?.length) {
            isColorValid = color.includes(p?.colour?.title?.toLowerCase());
        }
        if (brand?.length) {
            isBrandValid = brand.includes(p?.brand?.toLowerCase());
        }
        if (price?.min || price?.max) {
            if (price?.min) isPriceValid = p?.price?.final_price >= price?.min;
            if (price?.max) isPriceValid = p?.price?.final_price <= price?.max;
        }
        if (discount?.min || discount?.max) {
            if (discount?.min) isDiscount = p?.discount >= discount?.min;
            if (discount?.max) isDiscount = p?.discount <= discount?.max;
        }
        return isColorValid && isBrandValid && isPriceValid && isDiscount;
    });
    console.log({ allProducts, filters, filteredProducts });

    dispatch({ type: APPLY_FILTER_SUCCESS, payload: filteredProducts })
}