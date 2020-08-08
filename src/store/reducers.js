import { combineReducers } from "redux";

import auth from "./auth";
import user from "./user";
import products from "./products";
import filters from "./filters";
import cart from "./cart";

const rootReducer = combineReducers({
  auth,
  user,
  products,
  filters,
  cart
});

export default rootReducer;
