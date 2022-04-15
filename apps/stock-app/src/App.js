import "./App.css";
import { useState } from "react";
import ProductItemAdd from "./components/ProductItemAdd";
import product from "./api/products.json";

function App() {

  const [products, setProducts] = useState(product)

  return (
    <div className="container w-75">
      <h1 className="fw-bold fst-italic py-2 border-bottom mb-2">Medicines</h1>
      <ProductItemAdd setProducts={setProducts} products={products} />
    </div>
  );
}

export default App;
