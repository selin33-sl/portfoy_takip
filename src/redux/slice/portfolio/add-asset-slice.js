import {createSlice} from '@reduxjs/toolkit';
import {addAssetProcess} from '../../../api';

export const addAssetSlice = createSlice({
  name: 'addAsset',
  initialState: {
    data: undefined,
    status: undefined,
    isLoading: false,
  },
  reducers: {
    resetAddAsset: state => {
      state.data = undefined;
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addAssetProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(addAssetProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.status = action.payload?.data?.status),
          (state.message = action.payload?.data?.message);
        // (state.data = action.payload?.data?.newPortfolioDetail);
      })
      .addCase(addAssetProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload?.status;
        state.message = action.payload?.message;
      });
  },
});

export const {resetAddAsset} = addAssetSlice.actions;
export default addAssetSlice.reducer;
