import {createSlice} from '@reduxjs/toolkit';
import {deletePortfolioProcess} from '../../../api';

export const deletePortfolioSlice = createSlice({
  name: 'deletePortfolio',
  initialState: {
    isLoading: {},
    status: {},
    message: {},
  },
  reducers: {
    resetDeletePortfolio: state => {
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(deletePortfolioProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(deletePortfolioProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.status = action.payload?.status),
          (state.message = action.payload?.message);
      })
      .addCase(deletePortfolioProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload?.errorCode;
        state.message = action.payload?.message;
      });
  },
});
export const {resetDeletePortfolio} = deletePortfolioSlice.actions;
export default deletePortfolioSlice.reducer;
