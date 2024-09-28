import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    searchProduct(state, action){
      return action.payload
    }
  }
})

export const { searchProduct } = searchSlice.actions
export default searchSlice.reducer