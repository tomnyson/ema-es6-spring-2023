class CartManager {
  carts;
  constructor() {
    this.carts = [
      {
        id: 1,
        image: "https://via.placeholder.com/150",
        title: "test product 1",
        price: 10,
        quantity: 10,
      },
      {
        id: 2,
        image: "https://via.placeholder.com/150",
        title: "test product 2",
        price: 10,
        quantity: 10,
      },
    ];
  }
  /**
   * 
   * cart = [{
    id; 1
    image: "https://via.placeholder.com/150"
    title: 
    price: 10
    quantity: 10
   },
   {
    id; 2
    image: http://base64
    title: 
    price: 15
    quantity: 10
   }
]
   */
  add(item) {
    /**
     * check cart
     * cart [] => push luon
     * cart co item -> kt ton tai chua co -> them mou
     * neu co: -> cap nhat lai cart
     */
    if (this.carts.length) {
      // kt
      const index = this.carts.findIndex((cart) => cart.id === item.id);
      if (index === -1) {
        this.carts.push(item);
        return;
      }
      /**
       * xu ly update
       */
      this.carts[index].quantity += 1;
    } else {
      this.carts.push(item);
      return;
    }
  }
  decreaseQuantity(id) {
    const index = this.carts.findIndex((cart) => cart.id === id);
    /**
     *
     */
    if (this.carts[index].quantity < 2) {
      return;
    }
    this.carts[index].quantity -= 1;
  }
  remove(id) {
    this.carts.filter((cart) => cart.id !== id);
  }
  getCart() {
    return this.carts;
  }
  getTotal = () => {
    /**
     *
     */
    // sum = 0;
    // for (let i = 0; i <= this.carts.length; i++) {
    //   sum += this.carts[i].price * this.carts[i].quantity;
    // }
    // return sum;
    return this.carts.reduce(
      (cart, curValue) => cart + curValue.quantity * curValue.price,
      0
    );
  };
}
export default CartManager;
