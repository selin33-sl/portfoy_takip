import {createSlice} from '@reduxjs/toolkit';
import {sellAssetProcess} from '../../../api';

export const sellAssetSlice = createSlice({
  name: 'sellAsset',
  initialState: {
    isLoading: {},
    status: {},
    message: {},
    data: undefined,
  },
  reducers: {
    resetSellAsset: state => {
      state.data = undefined;
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(sellAssetProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(sellAssetProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.status = action.payload?.data?.status),
          (state.message = action.payload?.message),
          (state.data = action.payload?.data);
      })
      .addCase(sellAssetProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload?.data?.status;
        state.message = action.payload?.message;
      });
  },
});

export const {resetSellAsset} = sellAssetSlice.actions;
export default sellAssetSlice.reducer;
