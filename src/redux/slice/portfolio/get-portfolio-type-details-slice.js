import {createSlice} from '@reduxjs/toolkit';
import {getPortfolioTypeDetailsProcess} from '../../../api';

export const getPortfolioTypeDetailsSlice = createSlice({
  name: 'getPortfolioTypeDetails',
  initialState: {
    isLoading: {},
    status: {},
    message: {},
    data: undefined,
  },
  reducers: {
    resetPortfolioTypeDetails: state => {
      state.data = undefined;
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getPortfolioTypeDetailsProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(getPortfolioTypeDetailsProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.status = action.payload?.status),
          (state.message = action.payload?.message),
          (state.data = action.payload?.data?.data);
      })
      .addCase(getPortfolioTypeDetailsProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload?.status;
        state.message = action.payload?.message;
      });
  },
});

export const {resetPortfolioTypeDetails} = getPortfolioTypeDetailsSlice.actions;
export default getPortfolioTypeDetailsSlice.reducer;
