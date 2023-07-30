import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = (
  createAsyncThunk('products/fetchProducts', async (params) => {
    const {shopBy, searchBy, sortBy, currentPage} = params
    const {data} = await axios
      .get(`https://62f79a7bab9f1f8e890019ee.mockapi.io/products?${shopBy}&page=${currentPage}&${sortBy}&limit=8&${searchBy}&order=asc`)

    return data
  }))

const initialState = {
  items: [],
  shopProducts: 0,
  status: 'loading'
}

const productsSlice = createSlice({
  name: 'products',
  initialState,

  reducers: {
    getShopProducts(state, action) {
      state.shopProducts = action.payload
    }
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = 'loading'
      state.items = []
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.items = action.payload
      state.status = 'success'
    },
    [fetchProducts.rejected]: (state) => {
      state.status = 'error'
      state.items = []
    }
  }
})


export const selectProductsItems = (state) => state.products.items
export const selectShopItems = (state) => state.products.shopProducts
export const selectProductsStatus = (state) => state.products.status
export const selectProductByTitle = (title) => (state) => state.cart.cartProducts.find(product => product.title === title)
export const {getShopProducts} = productsSlice.actions
export default productsSlice.reducer
