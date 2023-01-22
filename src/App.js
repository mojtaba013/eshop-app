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
import Test from "./component/Test";
import { Provider } from "react-redux";
import { store } from "./Features/store";

function App() {
 
  return (
    <div className="">
      <BrowserRouter>
        <Provider store={store}>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/test" element={<Test />} />
            </Routes>
          </Layout>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
