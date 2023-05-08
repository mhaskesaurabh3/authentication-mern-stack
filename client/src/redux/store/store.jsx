import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from '../ProductSlice/ProductSlice';
import thunkMiddleware from 'redux-thunk';

const store = configureStore({
  reducer: {
    products: ProductReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunkMiddleware),
});

export default store;
