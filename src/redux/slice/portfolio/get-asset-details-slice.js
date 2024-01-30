import {createSlice} from '@reduxjs/toolkit';
import {getAssetDetailsProcess} from '../../../api';

export const getAssetDetailsSlice = createSlice({
  name: 'getAssetDetails',
  initialState: {
    isLoading: {},
    status: {},
    message: {},
    data: undefined,
  },
  reducers: {
    resetAssetDetails: state => {
      state.data = undefined;
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAssetDetailsProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAssetDetailsProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.status = action.payload?.data?.status),
          (state.message = action.payload?.message),
          (state.data = action.payload?.data);
      })
      .addCase(getAssetDetailsProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload?.data?.status;
        state.message = action.payload?.message;
      });
  },
});

export const {resetAssetDetails} = getAssetDetailsSlice.actions;
export default getAssetDetailsSlice.reducer;
