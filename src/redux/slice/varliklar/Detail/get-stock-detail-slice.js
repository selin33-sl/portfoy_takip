import {createSlice} from '@reduxjs/toolkit';
import {getStockDetailProcess} from '../../../../api';
export const getStockDetailSlice = createSlice({
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

      .addCase(getStockDetailProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(getStockDetailProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.status = action.payload?.data?.status),
          (state.message = action.payload?.message),
          (state.data = action.payload?.data);
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
