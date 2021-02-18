import { SET_PRODUCT } from "../types/productTypes";
import { getProductApi } from "../../resources/Api/Meli";
import Product from "../../resources/Store/entities/Product";
import Author from "../../resources/Store/entities/Author";

function setProductCreator(payload) {
  return {
    type: SET_PRODUCT,
    payload
  };
}

export const getProductAction = id => async dispatch => {
  const data = await getProductApi(id);

  const payload = {
    author: new Author(data.author),
    categories: data.categories.map(category => ({
      path: category,
      label: category
    })),
    item: new Product(data.item)
  };

  dispatch(setProductCreator(payload));
};
