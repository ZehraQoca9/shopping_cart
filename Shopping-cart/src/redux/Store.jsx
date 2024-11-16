import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../redux/slices/AppSlice'
import productReducer from '../redux/slices/ProductSlice'
import  basketReducer  from '../redux/slices/BasketSlice'

export const store = configureStore({
  reducer: {
    app: appReducer,
    product: productReducer,
    basket: basketReducer
  },
})