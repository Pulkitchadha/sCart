import {
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    SEARCH_BEGIN,
    SEARCH_SUCCESS,
    SEARCH_FAIL,
    APPLY_FILTER_BEGIN,
    APPLY_FILTER_SUCCESS,
    APPLY_FILTER_FAIL,
} from './types';

const INITIAL_STATE = {
    products: [],
    allProducts: [],
    loading: false,
    error: null,
};

export default function (state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case GET_PRODUCTS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: payload,
                allProducts: payload,
            }
        case GET_PRODUCTS_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        case SEARCH_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                products: payload,
                // allProducts: payload,
            }
        case SEARCH_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        case APPLY_FILTER_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case APPLY_FILTER_SUCCESS:
            return {
                ...state,
                loading: false,
                products: payload,
            }
        case APPLY_FILTER_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state;
    }
};