var x = 10;
// const y = 5;
// y = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
  alert(x);
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
