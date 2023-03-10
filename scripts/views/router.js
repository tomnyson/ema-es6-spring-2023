const viewRegister = () => {
  return `
  <div class="offset-3 col-md-6">
    <h3>Register</h3>
    <form>
        <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" class="form-control" id="username">
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" class="form-control" id="email">
        </div>
        <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" class="form-control" id="password">
        </div>
        <p style="color:red" id="errors"></p>
        <button type="button" class="btn btn-primary btn-register-submit">Register</button>
    </form>
</div>`;
};
const viewHome = (data) => {
  return `
    <div class="row">
    <div class="search">
      <input
        type="text"
        id="input-search"
        class="form-control"
        placeholder="nhập từ khoá tìm kiếm"
        aria-describedby="basic-addon1"
      />
      <div class="search_modal hide">
      </div>
    </div>
  </div>
  <div class="loading">
    <div id="loading-spiner" class="text-primary" role="status"></div>
  </div>

  <div id="items" class="row">
    <div class="col-md-3 col-sm-12">
      <div class="card shadow-sm">
        <svg
          class="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#55595c"></rect>
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
        </svg>
        <div class="card-body">
          <p class="card-text">
            This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
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
  </div>
    `;
};

const viewDetail = (detail) => {
  console.log("detail", detail);
  return `<div>
      <div class="loading">
        <div id="loading-spiner" class="text-primary" role="status"></div>
      </div>
      <div id="items" class="row">
        <div class="col-sm-12">
          <div class="card shadow-sm">
            <img class="thumbnail" src="#"/>
            <div class="card-body">
             <h3>${detail.title}</h3>
              <p class="card-text">
                ${detail.description}
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
      </div>
    </div>`;
};
const view404 = () => {
  return `<div></h1>page not found </h1></div>`;
};
const viewLogin = () => {
  return `
  <div class="offset-3 col-md-6">
    <h3>Login Page</h3>
    <form>
    <div class="form-group">
      <label for="username">Username:</label>
      <input type="text" class="form-control" id="username">
    </div>
    <div class="form-group">
      <label for="password">Password:</label>
      <input type="password" class="form-control" id="password">
    </div>
    <p style="color:red" id="errors"></p>
    <button type="button" class="btn btn-primary btn-login-submit">Login</button>
    </form>
    </div>
    `;
};

const viewCart = (cartInstance) => {
  console.log("cartInstance", cartInstance);
  const renderItems = () => {
    let out = "";
    for (const item of cartInstance.getCart()) {
      out += `
      <tr>
            <td> <img src="${item?.image}" width="100" />${item?.title}</td>
            <td>
              <input type="number" value="${
                item?.quantity
              }" min="1" class="form-control" />
            </td>
            <td>$${item?.price}</td>
            <td>$${item?.price * item?.quantity}</td>
            <td>
              <button data-id="${
                item?.id
              }" class="btn btn-danger btn-sm btn-cart-delete">Remove</button>
            </td>
          </tr>
      
      `;
    }
    return out;
  };

  return `
    <div class="container">
      <h1 class="text-center">Shopping Cart</h1>
      <table class="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${renderItems()}
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3"></td>
            <td>
              <strong>Total: $${cartInstance.getTotal()}</strong>
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>
      <button class="btn btn-primary btn-block" id="btn-cart-checkout">
        Checkout
      </button>
    </div>`;
};

const viewCheckout = () => {
  return `
  <div>
  <h1 class="my-4">Checkout</h1>
  <div class="row">
      <div class="col col-md-8">
          <h2 class="my-4">Shipping Information</h2>
          <form>
              <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" class="form-control" id="name" placeholder="Enter your name">
              </div>
              <div class="form-group">
                  <label for="address">Address</label>
                  <input type="text" class="form-control" id="address" placeholder="Enter your phone">
              </div>
              <div class="form-group">
                  <label for="address">Phone</label>
                  <input type="text" class="form-control" id="address" placeholder="Enter your address">
              </div>
              <div class="form-group">
                  <label for="address">Address</label>
                  <input type="text" class="form-control" id="address" placeholder="Enter your note ">
              </div>
              <button type="submit" class="btn btn-primary">Place Order</button>
          </form>
      </div>
      <div class="col col-md-4">
          <h2 class="my-4">Cart Items</h2>
          <ul class="list-group">
              {{#each cart.items}}
              <li class="list-group-item">{{this.name}}</li>
              {{/each}}
          </ul>
      </div>
  </div>
  </div>
  `;
};
export const router = (path = "/", data = {}) => {
  switch (path) {
    case "/":
      return viewHome(data);
    case "/detail":
      return viewDetail(data);
    case "/login":
      return viewLogin(data);
    case "/register":
      return viewRegister(data);
    case "/cart":
      return viewCart(data);
    case "/checkout":
      return viewCheckout(data);
    default:
      return view404();
  }
};
