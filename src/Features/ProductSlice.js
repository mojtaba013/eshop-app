import { addListener, createSlice } from "@reduxjs/toolkit";
import { object } from "yup";
import { productsData } from "../data";

export const productSlice = createSlice({
  name: "product",
  initialState: productsData,
  reducers: {
    filter: (state, action) => {
      const filterItems = [action.payload];
      if (filterItems === "") return productsData;
      const filteredProducts = productsData.filter((product) => {
        return filterItems.some((item) => {
          return !Object.keys(item).some((key) => {
            if (key === "size" || key === "brand")
              return !item[key].split(",").some((i) => i === product[key]);
            else if (key === "price")
              return !item[key].split(",").some((i) => i >= product[key]);
          });
        });
      });
      return filteredProducts;
    },
    sort: (state, action) => {
      const sortBy = action.payload.sort;
      const allProducts = [...state];
      if (sortBy === "ارزانترین") {
        const sortedProducts = allProducts.sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
        return sortedProducts;
      } else if (sortBy === "گرانترین") {
        const sortedProducts = allProducts.sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
        return sortedProducts;
      }
      return allProducts;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, remove, filter, sort } =
  productSlice.actions;

export default productSlice.reducer;
