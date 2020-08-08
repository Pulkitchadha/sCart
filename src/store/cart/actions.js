import { ADD_PRODUCT, REMOVE_PRODUCT } from "./types";

export const addProduct = (payload) => (dispatch) => {
    dispatch({ type: ADD_PRODUCT, payload });
};

export const removeProduct = (payload) => (dispatch) => {
    dispatch({ type: REMOVE_PRODUCT, payload });
};

