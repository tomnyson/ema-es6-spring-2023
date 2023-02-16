import products from "../product.json";
import ManagerProduct from "./mangerProduct.js";
import ManagerUser from "./mangerUser.js";
import { debounce } from "./helper/helper";
import { router } from "./views/router.js";
import ManagerCart from "./managerCart.js";
var x = 10;
// const y = 5;
// y = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
  //   alert(x);
}
// Here x is 10
// thuong
function cong(a, b) {
  return a + b;
}
// arrow function
const congArrow = (a, b) => a + b;
const mang = ["le", "hong", "son"];
console.log(mang);
const mangDuplicate = [...mang];
console.log(mangDuplicate);

const mangB = [...mang, ...mangDuplicate];
console.log(mangB);

console.log("products", products.products);

// for (const item of products.products) {
//   if (item.price >= 50000) {
//     console.log("item", item);
//   }
// }

//map
const map = new Map();
map.set("pk001", "nguyen van a");
map.set("pk002", "nguyen van b");
map.set("pk003", "nguyen van c");
console.log(map.get("pk001"));
console.log(map.size);
console.log(map.delete("pk001"));
console.log(map.get("pk001"));
console.log(map.has("pk002"));
for (const x of map.keys()) {
  console.log(x);
}
console.log(map.clear());

console.log(map);

// const myPromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("I love You !!");
//   }, 5000);
// });

// myPromise.then(function (value) {
//   console.log(value);
// });
// console.log("1+2", 1 + 2);
/**
 * lấy data của api trả về render html
 *  document.getElementById("products").innerHTML
 */
// console.log("detailHtml", detailHtml);

// const set = new Set();
// set.add("a");
// set.add("a");
// set.add("a");
// set.add("b");
// set.add("b");
// set.add("c");
// console.log(set.size);
const inputSearch = document.getElementById("input-search");
const spinerLoading = document.getElementById("loading-spiner");

const searchDouce = debounce(async (event) => {
  await ManagerProduct.searchProduct(event.target.value);
  const searchModal = document.querySelector(".search_modal");
  searchModal.innerHTML = "";
  printModalSearchHtml(ManagerProduct.products);
  printHtml(ManagerProduct.products);
  spinerLoading.classList.remove("spinner-border");
}, 1000);

if (inputSearch) {
  inputSearch.addEventListener("input", (event) => {
    spinerLoading.classList.add("spinner-border");

    searchDouce(event);
  });
}
const rootHtml = document.querySelector("#root");
// router("/");
inputSearch.addEventListener("focus", () => {
  console.log("show input search");
  const searchModal = document.querySelector(".search_modal");
  printModalSearchHtml(ManagerProduct.products);

  searchModal.classList.remove("hide");
});

inputSearch.addEventListener("blur", () => {
  console.log("show input out");
  const searchModal = document.querySelector(".search_modal");
  searchModal.classList.add("hide");
});

const printModalSearchHtml = (data) => {
  const elPost = document.querySelector(".search_modal");
  console.log(elPost);
  let html = "";
  let i = 0;
  for (const item of data) {
    if (i > 5) {
      break;
    }
    html += `
    <div class="row">
        <div class="col-md-3">
          <img class="img-thumbnail" src="#" />
        </div>
        <div class="col-md-8">
        <a data-id=${item.id} class="item_href" href="#"/>
        <p>${item.title}</p>
        <p class="price">${item.price}</p>
        </a>
        </div>
    </div>
    `;
    i++;
  }
  i = 0;
  elPost.innerHTML = html;
  document.querySelectorAll(".item_href").forEach((e) =>
    e.addEventListener("click", () => {
      const id = e.getAttribute("data-id");
      const detail = ManagerProduct.products.filter(
        (product) => product.id === id
      );
      rootHtml.innerHTML = router("/detail", detail[0]);
      window.history.pushState({}, null, `/detail/${detail[0].id}`);
    })
  );
};

const handleDelete = () => {
  document.querySelectorAll(".btn-delete").forEach((e) =>
    e.addEventListener("click", () => {
      const id = e.getAttribute("data-id");
      if (confirm("are you sure delete") == true) {
        const productDeleted = ManagerProduct.products.filter(
          (product) => product.id !== id
        );
        console.log(productDeleted);
        printHtml(productDeleted);
        // rootHtml.innerHTML = router("/detail", detail[0]);
        // window.history.pushState({}, null, `/detail/${detail[0].id}`);
      } else {
        return;
      }
    })
  );
};

// document.addEventListener("DOMContentLoaded", function (event) {
//   console.log("DOMContent");
//   const btn_login = document.querySelector("#btn_login");
//   console.log("btn_login", btn_login);
//   if (btn_login) {
//     btn_login.addEventListener("click", function (e) {
//       e.preventDefault();
//       alert("show login form");
//       return false;
//     });
//   }
// });

/**
 * get username, password, email
 * kiem tra user ton tai chua ?
 * co -> thong bao
 * chua -> luu vao db -> chuyen ve dang nhap
 */
const xuLyRegister = async () => {
  const elUsername = document.getElementById("username");
  const elPassword = document.getElementById("password");
  const elErros = document.getElementById("errors");
  const errors = [];
  if (elUsername.value.trim() === "") {
    errors.push("user not empty");
  }
  if (elPassword.value.trim() === "") {
    errors.push("password not empty");
  }
  if (errors.length > 0) {
    // show error message
    elErros.innerHTML = errors.join("</br>");
    return;
  } else {
    // dang nhap thanh cong
    const isLogin = await ManagerUser.login(elUsername.value, elPassword.value);
    //   $(".navbar-nav").append(` <li class="nav-item">
    //   <a id="btn-logout" class="nav-link" href="#">Logout</a>
    // </li>`);
    if (isLogin) {
      const navigation = document.querySelector(".navbar-nav");
      navigation.insertAdjacentHTML(
        "beforeend",
        `<li class="nav-item">
        <a  class="nav-link btn-logout" href="#">Logout</a>
        </li>`
      );
    }
  }
};

const checkUser = () => {
  if (ManagerUser) {
    const isLogin = ManagerUser.checkLogin();
    if (isLogin) {
      const user = ManagerUser.getUser();
      console.log("user", user);
      const navigation = document.querySelector(".menu-right");
      navigation.insertAdjacentHTML(
        "beforeend",
        `<li class="nav-item">
      <a class="nav-link btn-logout" href="#">Logout</a>
      </li>`
      );
      // View Login
    } else {
      // View Gest
    }
  }
};
checkUser();

const xuLylogout = () => {
  ManagerUser.logout();
  renderView("/");
};

const handleRegister = () => {};

const cart = new ManagerCart();
const handleAddCart = () => {
  const btnAddCart = document.querySelectorAll(".btn-add-cart");
  if (btnAddCart) {
    btnAddCart.forEach((e) =>
      e.addEventListener("click", () => {
        const id = e.getAttribute("data-id");
        const addProduct = ManagerProduct.products.filter(
          (product) => product.id == id
        );
        cart.add({ ...addProduct[0], quantity: 1 });
        console.log("addProduct", cart.getCart());
      })
    );
  }
};

document.addEventListener("DOMContentLoaded", function () {
  handleAddCart();
});

let productList = [];
(async () => {
  await ManagerProduct.getAll();
  printHtml(ManagerProduct.products);
  productList = ManagerProduct.products;
})();
const printHtml = (data) => {
  const elPost = document.getElementById("items");
  let html = "";
  for (const item of data) {
    html += `
    <div id="item" class="col-lg-3 col-md-12">
    <div class="card shadow-sm">
      <img class="thumbnail" src="#"/>
      <div class="card-body">
      <h5 class="cart-title">${item.title}</h5>
        <p class="card-text">
          ${item.description}
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
          <button
              type="button"
              data-id="${item.id}"
              class="btn btn-sm btn-outline-secondary btn-add-cart"
            >
              Add
            </button>
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
            >
              View
            </button>
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
            >
              Edit
            </button>
            <button
            type="button"
            data-id=${item.id}
            class="btn-delete btn btn-sm btn-outline-danger"
          >
            delete
          </button>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
  }
  elPost.innerHTML = html;
  handleDelete();
  handleAddCart();
};

const handleCart = () => {
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-cart-delete")) {
      const id = event.target.getAttribute("data-id");
      cart.remove(id + "");
      renderCart();
    }
  });
};

const renderCart = () => {
  rootHtml.innerHTML = router("/cart", cart);
  window.history.pushState({}, null, `/cart`);
};

const handleCheckOut = () => {
  const btnCheckout = document.querySelector("#btn-cart-checkout");
  if (btnCheckout) {
    console.log("btn-cart-checkout");
    btnCheckout.addEventListener("click", () => {
      rootHtml.innerHTML = router("/checkout", cart);
      window.history.pushState({}, null, `/checkout`);
      handleCart();
    });
  }
};

window.addEventListener("load", (event) => {
  document.addEventListener("click", (event) => {
    /**
     * SWITCH CASE
     */
    const classClicked = event.target.classList;
    switch (true) {
      case classClicked.contains("btn-login"):
        renderView("/login");
        break;

      case classClicked.contains("btn-register"):
        renderView("/register");
        break;

      case classClicked.contains("btn-cart"):
        renderView("/cart", cart);
        break;

      case classClicked.contains("btn-login-submit"):
        xuLyLogin();
        break;

      case classClicked.contains("btn-register-submit"):
        xuLyRegister();
        break;
      case classClicked.contains("btn-logout"):
        xuLylogout();
        break;

      default:
        break;
    }
  });
});

const renderView = (path, data) => {
  rootHtml.innerHTML = router(path, data);
  window.history.pushState({}, null, path);
};

const xuLyLogin = async () => {
  const elUsername = document.getElementById("username");
  const elPassword = document.getElementById("password");
  const elButtonLogin = document.getElementById("btn-login-submit");
  const elErros = document.getElementById("errors");
  const errors = [];
  if (elUsername.value.trim() === "") {
    errors.push("user not empty");
  }
  if (elPassword.value.trim() === "") {
    errors.push("password not empty");
  }
  if (errors.length > 0) {
    // show error message
    elErros.innerHTML = errors.join("</br>");
    return;
  } else {
    // dang nhap thanh cong
    const isLogin = await ManagerUser.login(elUsername.value, elPassword.value);
    if (isLogin) {
      const navigation = document.querySelector(".navbar-nav");
      navigation.insertAdjacentHTML(
        "beforeend",
        `<li class="nav-item">
        <a  class="nav-link btn-logout" href="#">Logout</a>
        </li>`
      );
    }
  }
};
