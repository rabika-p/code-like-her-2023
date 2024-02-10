import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ProductList, ProductForm } from "./components";
import { ProductProvider } from "./contexts/ProductContext";

function App() {
  return (
    <ProductProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />}></Route>
          <Route path="/add-product" element={<ProductForm />}></Route>
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;
