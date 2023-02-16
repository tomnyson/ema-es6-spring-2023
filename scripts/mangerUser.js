//  *  array quản lý post
//  */
import { LoginUser } from "./services/userServices";

const USER_KEY = "user";
const ROUTE_USER = ["profile", "checkout"];
const ROUTER_GUEST = ["", "detail", "register", "forgot", "login"];
class ManagerUser {
  // constructor(username, password) {}
  static async getAll() {
    const data = await getAll();
    this.products = data;
  }
  static async login(username, password) {
    console.log("isLogin call");
    const data = await LoginUser(username, password);
    console.log("data", data.length);
    if (data.length > 0) {
      ManagerUser.saveUserData(data[0]);
      return true;
    }
    return false;
  }
  static saveUserData(data) {
    localStorage.setItem(USER_KEY, JSON.stringify(data));
  }
  static checkLogin() {
    return new Promise((resolve, reject) => {
      if (localStorage.getItem(USER_KEY)) {
        resolve(true);
      }
      reject(false);
    });
  }
  static getUser() {
    console.log("call data getUser");
    if (localStorage.getItem(USER_KEY)) {
      console.log(
        "call data user key",
        JSON.parse(localStorage.getItem(USER_KEY))
      );
      return JSON.parse(localStorage.getItem(USER_KEY));
    }
    return null;
  }
  static logout() {
    if (localStorage.getItem(USER_KEY)) {
      localStorage.removeItem(USER_KEY);
    }
  }

  static checkPermission(role, path) {
    if (role === "admin") {
      return true;
    }
    if (role === "user" && ROUTE_USER.includes(path)) {
      return true;
    }
    if (role === null && ROUTER_GUEST.includes(path)) {
      return true;
    }
    return false;
  }
}

export default ManagerUser;
