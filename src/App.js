import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import HomePage from "./component/HomePage";
import ProductsProvider from "./Providers/ProductProvider";
import CartProvider from "./Providers/CartProvider";
import Login from "./component/Login";
import Signup from "./component/Signup";
import AuthProvider from "./Providers/AuthProvider";
import Checkout from "./component/Checkout";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <AuthProvider>
          <ProductsProvider>
            <CartProvider>
              <Layout>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/checkout" element={<Checkout />} />
                </Routes>
              </Layout>
            </CartProvider>
          </ProductsProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
