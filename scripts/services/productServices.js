import { fetchProduct } from "../api/index.js";
/**
 * getAll
 * getDetail
 * create
 * update
 * delete
 */

export const getAll = async () => {
  return fetchProduct("products");
};
