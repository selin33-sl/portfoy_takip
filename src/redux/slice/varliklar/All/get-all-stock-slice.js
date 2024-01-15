import {createSlice} from '@reduxjs/toolkit';
import {getAllStockProcess} from '../../../../api';
export const getAllStockSlice = createSlice({
  name: 'getAllStock',
  initialState: {
    isLoading: {},
    status: {},
    message: {},
    data: undefined,
  },
  reducers: {
    resetAllStock: state => {
      state.data = undefined;
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder

      .addCase(getAllStockProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllStockProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.status = action.payload?.status),
          (state.message = action.payload?.message),
          (state.data = action.payload?.data?.data);
      })
      .addCase(getAllStockProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload?.errorCode;
        state.message = action.payload?.message;
      });
  },
});

export const {resetAllStock} = getAllStockSlice.actions;
export default getAllStockSlice.reducer;
