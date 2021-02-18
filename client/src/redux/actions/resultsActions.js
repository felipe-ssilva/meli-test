import { SET_RESULTS } from "../types/resultsTypes";
import { searchProductsApi } from "../../resources/Api/Meli";
import Product from "../../resources/Store/entities/Product";
import Author from "../../resources/Store/entities/Author";

function setResultsCreator(payload) {
  return {
    type: SET_RESULTS,
    payload
  };
}

export const searchResultsAction = search => async dispatch => {
  const data = await searchProductsApi(search);

  const payload = {
    author: new Author(data.author),
    categories: data.categories.map(category => ({
      path: category,
      label: category
    })),
    items: data.items.map(item => new Product(item))
  };

  dispatch(setResultsCreator(payload));
};
