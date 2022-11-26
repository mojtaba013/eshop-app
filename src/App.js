import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import HomePage from "./component/HomePage";
import ProductsProvider from "./component/Providers/ProductProvider";
import CartProvider from "./component/Providers/CartProvider";
import Cart from "./component/Cart";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <ProductsProvider>
          <CartProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<Cart/>}/>
              </Routes>
            </Layout>
          </CartProvider>
        </ProductsProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
