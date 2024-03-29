import { createSlice } from '@reduxjs/toolkit';

import { IProduct } from '../../components/Products/Products';

interface СartState {
  cart: IProduct[];
}

const initialState: СartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === action.payload.id,
      );

      if (existingItem?.quantity) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cart.find((cartItem) => cartItem.id === id);

      if (existingItem?.quantity) {
        existingItem.quantity = quantity;
      }
    },
    deleteItem: (state, action) => {
      const id = action.payload;

      state.cart = state.cart.filter((cartItem) => cartItem.id !== id);
    },
  },
});

export const cartReducer = cartSlice.reducer;
