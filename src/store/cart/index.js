import { ADD_PRODUCT, REMOVE_PRODUCT } from "./types";

const INITIAL_STATE = {
    products: [],
};

export default function (state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case ADD_PRODUCT: {
            return {
                ...state,
                products: [
                    ...state.products,
                    payload
                ]
            };
        }
        case REMOVE_PRODUCT: {
            return {
                ...state,
                products: state.products.filter(p => p.id !== payload)
            };
        }
        default:
            return state;
    }
};