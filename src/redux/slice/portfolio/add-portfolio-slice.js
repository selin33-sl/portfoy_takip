import {createSlice} from '@reduxjs/toolkit';
import {addPortfolioProcess} from '../../../api';

export const addPortfolioSlice = createSlice({
  name: 'createPortfolio',
  initialState: {
    data: undefined,
    status: undefined,
    isLoading: false,
  },
  reducers: {
    resetAddPortfolio: state => {
      state.data = undefined;
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addPortfolioProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(addPortfolioProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.status = action.payload?.status),
          (state.message = action.payload?.message),
          (state.data = action.payload?.data?.newPortfolio);
      })
      .addCase(addPortfolioProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload?.status;
        state.message = action.payload?.message;
      });
  },
});

export const {resetAddPortfolio} = addPortfolioSlice.actions;
export default addPortfolioSlice.reducer;
