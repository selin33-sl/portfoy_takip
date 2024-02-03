import {createSlice} from '@reduxjs/toolkit';
import {updateAssetProcess} from '../../../api';

export const updateAssetSlice = createSlice({
  name: 'updateAsset',
  initialState: {
    isLoading: {},
    status: {},
    message: {},
  },
  reducers: {
    resetUpdateAsset: state => {
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(updateAssetProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateAssetProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.status = action.payload?.data?.status),
          (state.message = action.payload?.data?.message);
      })
      .addCase(updateAssetProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload?.data?.status;
        state.message = action.payload?.data?.message;
      });
  },
});
export const {resetUpdateAsset} = updateAssetSlice.actions;
export default updateAssetSlice.reducer;
