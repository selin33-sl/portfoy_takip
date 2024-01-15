import {createSlice} from '@reduxjs/toolkit';
import {getStokDetailProcess} from '../../../../api';
export const getStokDetailSlice = createSlice({
  name: 'getStockDetail',
  initialState: {
    isLoading: {},
    status: {},
    message: {},
    data: undefined,
  },
  reducers: {
    resetStockDetail: state => {
      state.data = undefined;
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder

      .addCase(getStokDetailProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(getStokDetailProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.status = action.payload?.status),
          (state.message = action.payload?.message),
          (state.data = action.payload?.data?.data);
      })
      .addCase(getStokDetailProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload?.errorCode;
        state.message = action.payload?.message;
      });
  },
});

export const {resetStockDetail} = getStokDetailSlice.actions;
export default getStokDetailSlice.reducer;
