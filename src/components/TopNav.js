import React, { Component } from "react";
// import data from "./../data.json";
import AddToCart from "./AddToCart";
import Filter from "./Filter";
import Products from "./Products";

export class TopNav extends Component {
  state = {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  };
  createOrder = (order) => {
    alert("Need to save order for" + order.name);
  };
  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((x) => x._id !== product._id),
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems.filter((x) => x._id !== product._id))
    );
  };
  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  // sortProducts = (e) => {
  //   // console.log(e.target.value);
  //   const sort = e.target.value;
  //   this.setState((state) => ({
  //     sort: sort,
  //     products: this.state.products
  //       .slice()
  //       .sort((a, b) =>
  //         sort === "lowest"
  //           ? a.price > b.price
  //             ? 1
  //             : -1
  //           : sort === "highest"
  //           ? a.price < b.price
  //             ? 1
  //             : -1
  //           : a._id > b._id
  //           ? 1
  //           : -1
  //       ),
  //   }));
  // };

  // filterProducts = (e) => {
  //   // console.log(e.target.value);
  //   if (e.target.value === "") {
  //     this.setState({ size: e.target.value, products: data.products });
  //   } else {
  //     this.setState({
  //       size: e.target.value,
  //       products: data.products.filter(
  //         (product) => product.availableSizes.indexOf(e.target.value) >= 0
  //       ),
  //     });
  //   }
  // };
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">ShopingCart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter />
              <Products />
            </div>
            <div className="sidebar">
              <AddToCart
                cartItems={this.state.cartItems}
                removeFromCart={this.removeFromCart}
                createOrder={this.createOrder}
              />
            </div>
          </div>
        </main>
        <footer>All right is reserved</footer>
      </div>
    );
  }
}

export default TopNav;
