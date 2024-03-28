import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const productsRequestAsync = createAsyncThunk(
  'products/axios',
  async () => {
    try {
      const response = await axios.get('http://localhost:3000/data.json');
      const { categories } = response.data;

      console.log('categories: ', categories);

      return categories;
    } catch (error) {
      return error;
    }
  },
);
