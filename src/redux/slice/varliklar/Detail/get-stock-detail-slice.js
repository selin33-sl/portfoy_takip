import {createSlice} from '@reduxjs/toolkit';
import {getStockDetailProcess} from '../../../../api';
export const getStockDetailSlice = createSlice({
  name: 'getStockDetail',
  initialState: {
    isLoading: {},
    status: {},
    message: {},
    data: undefined,
    lastPrice: undefined,
    name: undefined,
  },
  reducers: {
    resetStockDetail: state => {
      state.data = undefined;
      state.lastPrice = undefined;
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder

      .addCase(getStockDetailProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(getStockDetailProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.status = action.payload?.data?.status),
          (state.message = action.payload?.message),
          (state.lastPrice = action.payload?.data?.lastPrice),
          (state.name = action.payload?.data?.name),
          (state.data = action.payload?.data?.data);
      })
      .addCase(getStockDetailProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload?.data?.status;
        state.message = action.payload?.message;
      });
  },
});

export const {resetStockDetail} = getStockDetailSlice.actions;
export default getStockDetailSlice.reducer;
