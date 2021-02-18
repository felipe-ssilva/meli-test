const axios = require("axios");
const get = require("lodash/get");
const Product = require("../../entities/Product");

const URL = "https://api.mercadolibre.com";
const SEARCH_URL = `${URL}/sites/MLA/search`;
const ITEM_DETAIL_URL = `${URL}/items/:id`;
const ITEM_DESCRIPTION_URL = `${URL}/items/:id/description`;
const ITEM_CATEGORY_URL = `${URL}/categories/:id`;
const SEARCH_LIMIT = 4; // Its a constant for the challenge

async function meliSearch(search) {
  const params = {
    q: search,
    limit: SEARCH_LIMIT
  };

  try {
    const resp = await axios.get(SEARCH_URL, { params });
    const { results, filters } = resp.data;
    const author = {
      name: "Felipe",
      lastname: "Silva"
    };
    const categories = get(filters, "0.values.0.path_from_root", []).map(
      p => p.name
    ); // Dont know if it's the correctly way accessing array index directly
    const items = results.map(meliProduct => new Product(meliProduct));
    return {
      author,
      categories,
      items
    };
  } catch (e) {
    throw new Error(e);
  }
}

async function meliItemDetail(id) {
  const itemDetailUrl = ITEM_DETAIL_URL.replace(":id", id);
  const itemDescriptionUrl = ITEM_DESCRIPTION_URL.replace(":id", id);

  try {
    const itemResp = await axios.get(itemDetailUrl);
    const descriptionResp = await axios.get(itemDescriptionUrl);
    const product = {
      ...itemResp.data,
      description: descriptionResp.data.plain_text
    };

    const itemCategoryUrl = ITEM_CATEGORY_URL.replace(
      ":id",
      itemResp.data.category_id
    );
    const categoryResp = await axios.get(itemCategoryUrl);
    const categories = get(categoryResp, "data.path_from_root", []).map(
      p => p.name
    );
    const item = new Product(product);
    const author = {
      name: "Felipe",
      lastname: "Silva"
    };
    return {
      author,
      categories,
      item
    };
  } catch (e) {
    throw new Error(e);
  }
}

module.exports = {
  meliSearch,
  meliItemDetail
};
