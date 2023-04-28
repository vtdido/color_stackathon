import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import colorLibraryReducer from '../features/colorLibrarySlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    colorLibrary: colorLibraryReducer,
  },
});

export default store;
export * from '../features/authSlice';
