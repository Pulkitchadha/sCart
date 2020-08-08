import api from 'services/api';
import { GET_FILTERS_BEGIN, GET_FILTERS_SUCCESS, GET_FILTERS_FAIL } from "./types";

export const getFilters = () => async (dispatch) => {
    try {
        dispatch({ type: GET_FILTERS_BEGIN });

        const filters = await api.get('filters');

        dispatch({ type: GET_FILTERS_SUCCESS, payload: filters })
    } catch (err) {
        dispatch({ type: GET_FILTERS_FAIL, payload: err.message });
    }
}