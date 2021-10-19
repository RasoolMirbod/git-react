import Product from "./components/Product/Product";
import React, { Component } from "react";
import "./App.css";
class App extends Component {
  state = {
    products: [
      { title: "React.js", price: "99$", id: 1 },
      { title: "Node.js", price: "89$", id: 2 },
      { title: "Javascript.js", price: "79$", id: 3 },
    ],
    userDate: "rasool",
  };
  clickHandler = () => {};
  render() {
    return (
      <div className="container" id="title">
        <h1>Shoping App</h1>
        {this.state.products.map((product) => {
          return (
            <Product
              name={product.title}
              price={product.price}
              key={product.id}
            />
          );
        })}
        <button onClick={this.clickHandler}>change price</button>
      </div>
    );
  }
}
export default App;
