import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items:[]
};

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addtoCart:(state,action) => {
            state.items = [...state.items,action.payload]
        },
        removetoCart:(state,action) => {
            const newItem = state.items.filter((item) => item.id !== action.payload);
            state.items = newItem;
        },
        updateCartQuantity: (state, action) => {
            const { id, qty } = action.payload;
            state.items = state.items.map(item => (item.id === id ? { ...item, qty } : item));
        }
    }
});

export const { addtoCart,removetoCart,updateCartQuantity } = cartSlice.actions;
export default cartSlice.reducer;



