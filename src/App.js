import React, { Component } from "react";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
class App extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div className="container" id="title">
        <h1>Shoping App</h1>
        <ProductList />
      </div>
    );
  }
}
export default App;
