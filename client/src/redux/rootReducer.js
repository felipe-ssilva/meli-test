import { combineReducers } from "redux";

import resultsReducer from "./reducers/resultsReducer";
import productReducer from "./reducers/productReducer";

export function createRootReducer() {
  return combineReducers({
    results: resultsReducer,
    product: productReducer
  });
}
