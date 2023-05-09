import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  productData: [],
  error: '',
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get(
      'https://api-test.innoloft.com//product/6781/'
    );
    const data = await response.data;
    console.log('Data', data);
    return data;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      (state.loading = false), (state.productData = action.payload);
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      (state.loading = true),
        (state.productData = []),
        (state.error = action.error.message);
    });
  },
});

export default productSlice.reducer;
