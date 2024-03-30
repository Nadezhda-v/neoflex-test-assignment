import { createSlice } from '@reduxjs/toolkit';

import { productsRequestAsync } from './productsAction';
import { CategoryItem } from '../../components/Products/Section/Section';

interface ProductsState {
  loading: boolean;
  categories: CategoryItem[];
  error: string;
}

const initialState: ProductsState = {
  loading: false,
  categories: [],
  error: '',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productsRequestAsync.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(productsRequestAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
        state.error = '';
      })
      .addCase(productsRequestAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as Error).message;
      });
  },
});

export const productsReducer = productsSlice.reducer;
