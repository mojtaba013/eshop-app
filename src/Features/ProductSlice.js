import { addListener, createSlice } from "@reduxjs/toolkit";
import { object } from "yup";
import { productsData } from "../data";



export const productSlice = createSlice({
  name: "product",
  initialState: productsData,
  reducers: {
    increment: (state, action) => {
      const UpdatesProducts = [...state];
      const index = state.findIndex((item) => item.id === action.id);
      const _product = { ...state[index] };
      _product.quantity++;
      UpdatesProducts[index] = _product;
      return UpdatesProducts;
    },
    decrement: (state, action) => {
      const index = state.findIndex((item) => item.id === action.id);
      const _product = { ...state[index] };
      if (_product.quantity === 1) {
        const filterdProducts = state.filter((p) => p.id !== action.id);
        return filterdProducts;
      } else {
        _product.quantity--;
        const UpdatesProducts = [...state];
        UpdatesProducts[index] = _product;
        return UpdatesProducts;
      }
    },
    remove: (state, action) => {
      const filterdProducts = state.filter((p) => p.id !== action.id);
      return filterdProducts;
    },
    filter: (state, action) => {
      const filterItems = [action.payload];
      console.log(filterItems);
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
      console.log(action.payload);
      const sortBy = action.payload.sort ;

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
