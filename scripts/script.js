import products from "../product.json" assert { type: "json" };
import ManagerProduct from "./mangerProduct.js";
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
const productList = await ManagerProduct.getAll();
console.log("productList", ManagerProduct.products);
const printHtml = (data) => {
  console.log(data);
  const elPost = document.getElementById("items");
  let html = "";
  for (const item of data) {
    html += `
    <div id="item" class="col">
    <div class="card shadow-sm">
      <img src="${item.image}"/>
        <title>${item.title}</title>
      <div class="card-body">
        <p class="card-text">
          ${item.description}
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
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
          </div>
          <small class="text-muted">9 mins</small>
        </div>
      </div>
    </div>
  </div>
    `;
  }
  elPost.innerHTML = html;
};
printHtml(ManagerProduct.products);
const set = new Set();
set.add("a");
set.add("a");
set.add("a");
set.add("b");
set.add("b");
set.add("c");
console.log(set.size);
