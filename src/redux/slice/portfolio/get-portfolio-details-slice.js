import {createSlice} from '@reduxjs/toolkit';
import {getPortfolioDetailsProcess} from '../../../api';

export const getPortfolioDetailsSlice = createSlice({
  name: 'getPortfolioDetails',
  initialState: {
    isLoading: {},
    status: {},
    message: {},
    data: undefined,
  },
  reducers: {
    resetPortfolioDetails: state => {
      state.data = undefined;
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getPortfolioDetailsProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(getPortfolioDetailsProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.status = action.payload?.data?.status),
          (state.message = action.payload?.message),
          (state.data = action.payload?.data?.data);
      })
      .addCase(getPortfolioDetailsProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload?.data?.status;
        state.message = action.payload?.message;
      });
  },
});

export const {resetPortfolioDetails} = getPortfolioDetailsSlice.actions;
export default getPortfolioDetailsSlice.reducer;
