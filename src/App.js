import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import HomePage from "./component/HomePage";
import ProductsProvider from "./Providers/ProductProvider";
import CartProvider from "./Providers/CartProvider";
import Login from "./component/Login";
import Signup from "./component/Signup";
import AuthProvider from "./Providers/AuthProvider";
import Checkout from "./component/Checkout";
import Test from "./component/Test";
import { Provider } from "react-redux";
import { store } from "./Features/store";
import Favorites from "./component/Favorites";
import { Counter } from "./component/Counter";
import ProductDetail from "./component/ProductDetail";
import { ToastContainer } from "react-toastify";
import { css } from "@emotion/react";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Layout>
          <ToastContainer toastStyle={{ fontFamily: "iranyekan" }} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/productdetail" element={<ProductDetail />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/favorites" element={<Favorites />} />

            <Route path="/test" element={<Test />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
