import {
    GET_FILTERS_BEGIN,
    GET_FILTERS_SUCCESS,
    GET_FILTERS_FAIL,
} from './types';

const INITIAL_STATE = {
    filters: [],
    loading: false,
    error: null,
};

export default function (state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case GET_FILTERS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case GET_FILTERS_SUCCESS:
            return {
                ...state,
                loading: false,
                filters: payload
            }
        case GET_FILTERS_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state;
    }
};