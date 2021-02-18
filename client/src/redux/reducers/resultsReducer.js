import { CLEAN_RESULTS, SET_RESULTS } from "../types/resultsTypes";

const initialState = {};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case SET_RESULTS:
      return action.payload;
    case CLEAN_RESULTS:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
