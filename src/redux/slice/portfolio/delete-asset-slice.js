import {createSlice} from '@reduxjs/toolkit';
import {deleteAssetProcess} from '../../../api';

export const deleteAssetSlice = createSlice({
  name: 'deleteAsset',
  initialState: {
    isLoading: {},
    status: {},
    message: {},
  },
  reducers: {
    resetDeleteAsset: state => {
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(deleteAssetProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteAssetProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.status = action.payload?.status),
          (state.message = action.payload?.message);
      })
      .addCase(deleteAssetProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload?.status;
        state.message = action.payload?.message;
      });
  },
});
export const {resetDeleteAsset} = deleteAssetSlice.actions;
export default deleteAssetSlice.reducer;
