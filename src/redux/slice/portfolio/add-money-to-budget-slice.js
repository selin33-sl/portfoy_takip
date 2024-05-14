import {createSlice} from '@reduxjs/toolkit';
import {addMoneyToBudgetProcess} from '../../../api';

export const addMoneyToBudgetSlice = createSlice({
  name: 'addMoneyToBudget',
  initialState: {
    data: undefined,
    status: undefined,
    isLoading: false,
  },
  reducers: {
    resetAddMoneyToBudget: state => {
      state.data = undefined;
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addMoneyToBudgetProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(addMoneyToBudgetProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.status = action.payload?.data?.status),
          (state.message = action.payload?.data?.message);
        state.data = action.payload?.data;
      })
      .addCase(addMoneyToBudgetProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload?.status;
        state.message = action.payload?.message;
      });
  },
});

export const {resetAddMoneyToBudget} = addMoneyToBudgetSlice.actions;
export default addMoneyToBudgetSlice.reducer;
