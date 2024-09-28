import { createSlice } from '@reduxjs/toolkit'

const categorySlice = createSlice({
  name: 'category',
  initialState : 'all',
  reducers: {
    filterProducts(state, action){
      return action.payload
    }
  }
})


export const { filterProducts } = categorySlice.actions
export default categorySlice.reducer