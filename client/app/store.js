import { configureStore } from '@reduxjs/toolkit';
import colorLibraryReducer from '../features/colorLibrarySlice';
import mixerReducer from '../features/mixerSlice';

const store = configureStore({
  reducer: {
    colorLibrary: colorLibraryReducer,
    mixer: mixerReducer,
  },
});

export default store;
