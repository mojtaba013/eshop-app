import { createSlice, current } from "@reduxjs/toolkit";

import { productsData } from "../data";

const initialState = {
  allData: productsData,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    filterProducts: (state, action) => {
      const filterItems = [action.payload];
      console.log(filterItems, current(state));
      const filteredProducts = productsData.filter((product) => {
        return filterItems.some((item) => {
          return !Object.keys(item).some((key) => {
            if (key === "size" || key === "brand")
              return !item[key].split(",").some((i) => i === product[key]);
            else if (key === "price") {
              //return !item[key].split(",").some((i) => i >= product[key]);
              const minPrice = item[key].split("-").at(0);
              const maxPrice = item[key].split("-").at(1);
              return !(product[key] >= minPrice && product[key] <= maxPrice);
            }
          });
        });
      });
      state.allData = filteredProducts;
    },

    sort: (state, action) => {
      const sortBy = action.payload.sort;
      //console.log( sortBy, current(state));
      if (sortBy === "ارزانترین") {
        state.allData.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      } else if (sortBy === "گرانترین") {
        state.allData.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      }
    },

    displayAllProducts: (state) => {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { filterProducts, sort, displayAllProducts } =
  productSlice.actions;

export default productSlice.reducer;
