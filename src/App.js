import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import HomePage from "./component/HomePage";
import ProductsProvider from "./Providers/ProductProvider";
import CartProvider from "./Providers/CartProvider";
import Cart from "./component/Cart";
import { useEffect } from "react";
import Login from "./component/Login";

function App() {

 
  return (
    <div className="">
      <BrowserRouter>
        <ProductsProvider>
          <CartProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </Layout>
          </CartProvider>
        </ProductsProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
