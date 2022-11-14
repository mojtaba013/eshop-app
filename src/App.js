import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import HomePage from "./component/HomePage";
import ProductsProvider from "./component/Providers/ProductProvider";


function App() {
  return (
    <div className="">
      <BrowserRouter>
     <ProductsProvider>
       <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Layout>
     </ProductsProvider>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
