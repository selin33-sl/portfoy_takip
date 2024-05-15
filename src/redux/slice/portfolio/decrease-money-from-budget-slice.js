import {createSlice} from '@reduxjs/toolkit';
import {decreaseMoneyFromBudgetProcess} from '../../../api';

export const decreaseMoneyFromBudgetSlice = createSlice({
  name: 'decreaseMoneyFromBudget',
  initialState: {
    data: undefined,
    status: undefined,
    isLoading: false,
  },
  reducers: {
    resetDecreaseMoneyFromBudget: state => {
      state.data = undefined;
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(decreaseMoneyFromBudgetProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(decreaseMoneyFromBudgetProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.status = action.payload?.data?.status),
          (state.message = action.payload?.data?.message);
        state.data = action.payload?.data;
      })
      .addCase(decreaseMoneyFromBudgetProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload?.status;
        state.message = action.payload?.message;
      });
  },
});

export const {resetDecreaseMoneyFromBudget} =
  decreaseMoneyFromBudgetSlice.actions;
export default decreaseMoneyFromBudgetSlice.reducer;
