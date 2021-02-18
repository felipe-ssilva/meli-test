import fetch from "isomorphic-unfetch";
import qs from "qs";

const URL = process.env.MELI_API_URL ? process.env.MELI_API_URL : "http://localhost:4000/api";
const ITEMS_URL = `${URL}/items`;

export function searchProductsApi(search) {
  const queryParams = qs.stringify({
    search
  });
  const url = `${ITEMS_URL}?${queryParams}`;
  return fetch(url)
    .then(res => res.json())
    .catch(e => console.log(e));
}

export function getProductApi(id) {
  const url = `${ITEMS_URL}/${id}`;
  return fetch(url)
    .then(res => res.json())
    .catch(e => console.log(e));
}
