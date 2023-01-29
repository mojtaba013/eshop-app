import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './CartSlice'
import productReducer from './ProductSlice'
import counterReducer from './counterSlice'

export const store = configureStore({
  reducer: {
    product:productReducer,
    cart:cartReducer,
    counter: counterReducer,
  }
})



