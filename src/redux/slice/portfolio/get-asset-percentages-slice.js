import {createSlice} from '@reduxjs/toolkit';
import {getAssetPercentagesProcess} from '../../../api';

export const getAssetPercentagesSlice = createSlice({
  name: 'getAssetPercentages',
  initialState: {
    isLoading: {},
    status: {},
    message: {},
    data: undefined,
  },
  reducers: {
    resetAssetPercentages: state => {
      state.data = undefined;
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAssetPercentagesProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAssetPercentagesProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.status = action.payload?.status),
          (state.message = action.payload?.message),
          (state.data = action.payload?.data?.data?.assetPercentages);
      })
      .addCase(getAssetPercentagesProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload?.status;
        state.message = action.payload?.message;
      });
  },
});

export const {resetAssetPercentages} = getAssetPercentagesSlice.actions;
export default getAssetPercentagesSlice.reducer;
