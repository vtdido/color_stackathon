import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPaletteColors = createAsyncThunk(
  'getPaletteColors',
  async () => {
    try {
      const { data } = await axios.get('api/palette');
      return data;
    } catch (err) {
      console.error(err.response.date);
    }
  }
);

export const paletteSlice = createSlice({
  name: 'palette',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPaletteColors.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectPaletteColors = (state) => state.palette;
export default paletteSlice.reducer;
