import {createSlice} from '@reduxjs/toolkit';
import {getBudgetDetailsProcess} from '../../../api';

export const getBudgetDetailsSlice = createSlice({
  name: 'getBudget',
  initialState: {
    isLoading: {},
    status: {},
    message: {},
    data: undefined,
  },
  reducers: {
    resetBudgetDetails: state => {
      state.data = undefined;
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getBudgetDetailsProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(getBudgetDetailsProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.status = action.payload?.data?.status),
          (state.message = action.payload?.message),
          (state.data = action.payload?.data?.data);
      })
      .addCase(getBudgetDetailsProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload?.data?.status;
        state.message = action.payload?.message;
      });
  },
});

export const {resetBudgetDetails} = getBudgetDetailsSlice.actions;
export default getBudgetDetailsSlice.reducer;
