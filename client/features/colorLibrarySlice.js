import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchColorLibrary = createAsyncThunk(
  'getColors',
  async () => {
    try {
      const { data } = await axios.get('/api/colors');
      return data;
    } catch (err) {
      console.error(err.response.date);
    }
  }
);

export const addNewColor = createAsyncThunk(
  'addNewColor',
  async (mixedColor) => {
    try {
      const { data } = await axios.post('/api/colors', mixedColor);
      return data;
    } catch (err) {
      console.error(err.response.date);
    }
  }
);

export const colorLibrarySlice = createSlice({
  name: 'colorLibrary',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchColorLibrary.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addNewColor.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export const selectColorLibrary = (state) => state.colorLibrary;
export default colorLibrarySlice.reducer;
