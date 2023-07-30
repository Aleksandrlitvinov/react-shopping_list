import {configureStore} from "@reduxjs/toolkit";
import products from "./slices/productsSlice"
import filter from "./slices/filterSlice";
import cart from "./slices/cartSlice"

export const store = configureStore({
  reducer: {
    products,
    filter,
    cart
  }
})