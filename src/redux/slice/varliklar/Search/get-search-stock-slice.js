import {createSlice} from '@reduxjs/toolkit';
import {getSearchStockProcess} from '../../../../api';

export const getSearchStockSlice = createSlice({
  name: 'searchStock',
  initialState: {
    isLoading: {},
    status: {},
    message: {},
    data: undefined,
  },
  reducers: {
    resetSearchStock: state => {
      state.data = undefined;
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getSearchStockProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(getSearchStockProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.status = action.payload?.data?.status),
          (state.message = action.payload?.message),
          (state.data = action.payload?.data?.data);
      })
      .addCase(getSearchStockProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload?.data?.status;
        state.message = action.payload?.message;
      });
  },
});

export const {resetSearchStock} = getSearchStockSlice.actions;
export default getSearchStockSlice.reducer;
