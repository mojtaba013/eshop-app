import { createSlice } from "@reduxjs/toolkit";

import { productsData } from "../data";

const initialState = {
  allData: productsData,
  myfavorite: JSON.parse(localStorage.getItem("favorites")),
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    filterProducts: (state, action) => {
      const filterItems = [action.payload];
      const filteredProducts = productsData.filter((product) => {
        return filterItems.some((item) => {
          return !Object.keys(item).some((key) => {
            if (key === "size" || key === "brand")
              return !item[key].split(",").some((i) => i === product[key]);
            else if (key === "price") {
              //return !item[key].split(",").some((i) => i >= product[key]);
              const firstvalue = item[key].split("-").at(0);
              const secondvalue = item[key].split("-").at(1);
              return !(
                product[key] >= firstvalue && product[key] <= secondvalue
              );
            }
          });
        });
      });
      state.allData = filteredProducts;
    },
    displayAllProducts: (state) => {
      state.allData = productsData;
    },
    sort: (state, action) => {
      const sortBy = action.payload.sort;
      const allProducts = state.allData;
      if (sortBy === "ارزانترین") {
        allProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      } else if (sortBy === "گرانترین") {
        allProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { filterProducts, sort, displayAllProducts } =
  productSlice.actions;

export default productSlice.reducer;
