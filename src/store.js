import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './reducers/productsReducer'
import categoryReducer from './reducers/categoryReducer'
import searchReducer from './reducers/searchReducer'
import cartReducer from './reducers/cartReducer'

const store = configureStore({
  reducer: {
    products: productsReducer,
    category: categoryReducer,
    search: searchReducer,
    cart: cartReducer
  }
})

export default store