import {
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    SEARCH_BEGIN,
    SEARCH_SUCCESS,
    SEARCH_FAIL
} from './types';

const INITIAL_STATE = {
    products: [],
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
                products: payload
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
                products: payload
            }
        case SEARCH_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state;
    }
};