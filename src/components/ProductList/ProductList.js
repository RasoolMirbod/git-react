import React, { Component } from "react";
import Product from "../Product/Product";
class ProductList extends Component {
  state = {
    products: [
      { title: "React.js", price: "99$", id: 1, quantity: 1 },
      { title: "Node.js", price: "89$", id: 2, quantity: 2 },
      { title: "Javascript.js", price: "79$", id: 3, quantity: 3 },
    ],
  };

  //state=> handler !
  removeHandler = (id) => {
    console.log("clicked", id);
    const filteredProducts = this.state.products.filter((p) => p.id !== id);
    this.setState({ products: filteredProducts });
  };

  incrementHandler = (id) => {
    // 1. id => ok
    // 2. find selected item
    // 3. add one item to quantity
    // 4. setState()
    const products = [...this.state.products];
    const selectedItem = products.find((p) => p.id === id);
    selectedItem.quantity++;
    console.log(products);
    this.setState({ products: products });
  };

  DecrementHandler = (id) => {
    // 1. id => ok
    // 2. find selected item
    // 3. add one item to quantity
    // 4. setState()
    const products = [...this.state.products];
    const selectedItem = products.find((p) => p.id === id);
    if (selectedItem.quantity === 1) {
      const filteredProducts = products.filter((p) => p.id !== id);
      this.setState({ products: filteredProducts });
    } else {
      selectedItem.quantity--;
      this.setState({ products });
    }
  };
  changeHandler = (event, id) => {
    // console.log(event.target.value,id);
    const products = [...this.state.products];
    const selectedItem = products.find((p) => p.id === id);
    selectedItem.title = event.target.value;
    this.setState({ products });
  };

  renderProduct = () => {
    if (this.state.products.length === 0)
      return <div>there is no product in cart </div>;
    return this.state.products.map((product, index) => {
      return (
        <Product
          // name={product.title}
          // price={product.price}
          // quantity={product.quantity}
          product={product}
          key={index}
          onDelete={() => this.removeHandler(product.id)}
          onIncrement={() => this.incrementHandler(product.id)}
          onDecrement={() => this.DecrementHandler(product.id)}
          onChange={(e) => this.changeHandler(e, product.id)}
        />
      );
    });
  };

  render() {
    return (
      <div>
        {!this.state.products.length && <div>go to shopping</div>}
        {this.renderProduct()}
      </div>
    );
  }
}

export default ProductList;
