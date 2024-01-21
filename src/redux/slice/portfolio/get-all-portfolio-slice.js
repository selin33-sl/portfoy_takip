import {createSlice} from '@reduxjs/toolkit';
import {getAllPortfolioProcess} from '../../../api';

export const getAllPortfolioSlice = createSlice({
  name: 'getAllPortfolio',
  initialState: {
    isLoading: {},
    status: {},
    message: {},
    data: undefined,
  },
  reducers: {
    resetAllPortfolio: state => {
      state.data = undefined;
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllPortfolioProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllPortfolioProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.status = action.payload?.status),
          (state.message = action.payload?.message),
          (state.data = action.payload?.data?.portfolios);
      })
      .addCase(getAllPortfolioProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload?.errorCode;
        state.message = action.payload?.message;
      });
  },
});

export const {resetAllPortfolio} = getAllPortfolioSlice.actions;
export default getAllPortfolioSlice.reducer;
