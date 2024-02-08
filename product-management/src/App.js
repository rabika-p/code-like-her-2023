import "./App.css";

import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ProductList, ProductForm } from "./components";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
        setLoading((prev) => !prev);
      })
      .catch((error) => {
        console.log(error);
        setProducts([]);
      });
  }, []);

  const addProduct = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<ProductList products={products} loading={loading} />}
        ></Route>
        <Route
          path="/add-product"
          element={<ProductForm addProduct={addProduct} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;