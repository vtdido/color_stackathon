import { configureStore } from '@reduxjs/toolkit';
import colorLibraryReducer from '../features/colorLibrarySlice';
import mixerReducer from '../features/mixerSlice';
import paletteReducer from '../features/paletteSlice';

const store = configureStore({
  reducer: {
    colorLibrary: colorLibraryReducer,
    mixer: mixerReducer,
    palette: paletteReducer,
  },
});

export default store;
