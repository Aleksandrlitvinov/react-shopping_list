import {createSlice} from "@reduxjs/toolkit";
import {getCartProductsFromStorage} from "../../utils/getCartProductsFromStorage";


const cartData = getCartProductsFromStorage()

const initialState = {
  cartProducts: cartData,
  totalPrice: 0,
  countPs: 0,
  countKg: 0,
  totalCount: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {

    updateCountValues(state) {

      const itemsKg = state.cartProducts.filter(item => item.measure === 'kilograms')
      const itemsPs = state.cartProducts.filter(item => item.measure === 'pieces')

      state.totalPrice = state.cartProducts.reduce((sum, product) => sum + (product.price * product.count), 0).toFixed(2)
      state.totalCount = state.cartProducts.reduce((sum, product) => sum + product.count, 0)

      state.countKg = itemsKg.reduce((sum, product) => sum + product.count, 0)
      state.countPs = itemsPs.reduce((sum, product) => sum + product.count, 0)
    },

    addCartItem(state, action) {
      const findItem = state.cartProducts.find(item => item.title === action.payload.title)

      if (findItem) {
        findItem.count++
      } else {
        state.cartProducts.push({
          ...action.payload,
          count: 1
        })
      }
    },

    minusCartItem(state, action) {

      const findItem = state.cartProducts.find(item => item.title === action.payload)
      if (findItem && findItem.count > 1) {
        findItem.count--
      }
    },

    removeCartItem(state, action) {

      state.cartProducts = state.cartProducts.filter(product => product.title !== action.payload)
    },

    clearItems(state) {
      state.cartProducts = []
      state.totalPrice = 0
    },

    addCartProductsStorage() {

    },
  }
})

export const selectCart = (state) => state.cart
export const selectCartProducts = (state) => state.cart.cartProducts
export const selectCartProductsCount = (state) => state.cart.cartProducts.length
export const selectCartTotalPrice = (state) => state.cart.totalPrice

export const {
  addCartItem,
  minusCartItem,
  removeCartItem,
  clearItems,
  updateCountValues
} = cartSlice.actions
export default cartSlice.reducer