//  *  array quản lý post
//  */
import { getAll } from "./services/productServices.js";

class ManagerProduct {
  constructor(products) {
    this.products = products;
  }
  static async getAll() {
    const data = await getAll();
    this.products = data;
  }
}

export default ManagerProduct;
