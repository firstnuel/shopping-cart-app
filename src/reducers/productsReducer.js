import { createSlice } from '@reduxjs/toolkit'
import productsService from '../services/products'

const productSlice = createSlice({
  name : 'products',
  initialState : [],
  reducers : {
    setProducts(state, action){
      return action.payload
    }
  }
})

export const { setProducts } = productSlice.actions
export default productSlice.reducer

export const intializeProducts = () => {
  return async dispatch => {
    const products = await productsService.getAll()
    dispatch(setProducts(products))
  }
}