import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMixerColors = createAsyncThunk(
  'getMixerColors',
  async () => {
    try {
      const { data } = await axios.get('/api/mixer');
      return data;
    } catch (err) {
      console.error(err.response.date);
    }
  }
);

export const addMixerColor = createAsyncThunk(
  'addMixerColor',
  async (selectedColor) => {
    try {
      const { data } = await axios.post('api/mixer', selectedColor);
      return data;
    } catch (err) {
      console.error(err.response.date);
    }
  }
);

export const deleteMixerColors = createAsyncThunk(
  'deleteMixerColors',
  async () => {
    try {
      const { data } = await axios.delete('/api/mixer');
      return data;
    } catch (err) {
      console.error(err.response.date);
    }
  }
);

export const mixerSlice = createSlice({
  name: 'mixer',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMixerColors.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addMixerColor.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(deleteMixerColors.fulfilled, (state, action) => {
      return [];
    });
  },
});

export const selectMixerColors = (state) => state.mixer;
export default mixerSlice.reducer;
