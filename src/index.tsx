import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CartProvider } from "./context/CartProvider";
import { ProductsProvider } from "./context/ProductsProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProductsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>
);
