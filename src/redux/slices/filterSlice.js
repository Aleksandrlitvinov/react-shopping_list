import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  shop: 'All',
  currentPage: 1,
  searchValue: '',
  sort: {
    name: 'price',
    sortProperty: 'price'
  },
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,

  reducers: {
    setShopName(state, action) {
      state.shop = action.payload
    },

    setSort(state, action) {
      state.sort = action.payload
    },

    setSearchValue(state, action) {
      state.searchValue = action.payload
    },

    setCurrentPage(state, action) {
      state.currentPage = action.payload
    },

    setFilters(state, action) {
      state.currentPage = Number(action.payload.currentPage)
      state.sort = action.payload.sort
      state.shop = action.payload.shop
      state.searchValue = action.payload.searchValue
    }
  }
})


export const selectFilter = (state) => state.filter
export const selectFilterShop = (state) => state.filter.shop
export const selectSearchValue = (state) => state.filter.searchValue
export const {
  setShopName,
  setSort,
  setCurrentPage,
  setFilters,
  setSearchValue
} = filterSlice.actions

export default filterSlice.reducer