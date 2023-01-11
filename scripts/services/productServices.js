import { fetchProduct } from "../api/index.js";
/**
 * getAll
 * getDetail
 * create
 * update
 * delete
 */

export const getAll = async () => {
  const query =
    "?" +
    new URLSearchParams({
      title_like: "veritatis",
    }).toString();
  return fetchProduct("products" + query);
};
// kiểm tra empty object
const isEmpty = (value) => {
  return Object.keys(value).length === 0;
};

export const searchProduct = async (payload = {}) => {
  const query = "?" + new URLSearchParams(payload).toString();
  return fetchProduct("products" + query);
};
