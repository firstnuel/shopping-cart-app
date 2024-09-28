import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart(state, action){
            state.push(action.payload)
        },
        updateCart(state, action){
            const {idx, item} = action.payload
            state[idx] = item
        },
        deleteCartItem(state, action){
            const idx = action.payload.id
            return state.filter(item => item.id !== idx)
        }
    }
})

export const { addToCart, updateCart, deleteCartItem } = cartSlice.actions
export default cartSlice.reducer


