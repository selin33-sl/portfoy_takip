import {createSlice} from '@reduxjs/toolkit';
import {updatePortfolioProcess} from '../../../api';

export const updatePortfolioSlice = createSlice({
  name: 'updatePortfolio',
  initialState: {
    isLoading: {},
    status: {},
    message: {},
  },
  reducers: {
    resetUpdatePortfolio: state => {
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(updatePortfolioProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(updatePortfolioProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.status = action.payload?.status),
          (state.message = action.payload?.message);
      })
      .addCase(updatePortfolioProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload?.status;
        state.message = action.payload?.message;
      });
  },
});
export const {resetUpdatePortfolio} = updatePortfolioSlice.actions;
export default updatePortfolioSlice.reducer;
