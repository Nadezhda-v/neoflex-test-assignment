import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { BASE_URL } from '../../api/constants';

export const productsRequestAsync = createAsyncThunk(
  'products/axios',
  async () => {
    try {
      const response = await axios.get(`${BASE_URL}data.json`);
      const { categories } = response.data;

      return categories;
    } catch (error) {
      return error;
    }
  },
);
