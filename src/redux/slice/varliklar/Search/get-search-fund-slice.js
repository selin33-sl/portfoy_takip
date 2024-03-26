import {createSlice} from '@reduxjs/toolkit';
import {getSearchFundProcess} from '../../../../api';

export const getSearchFundSlice = createSlice({
  name: 'searchFund',
  initialState: {
    isLoading: {},
    status: {},
    message: {},
    data: undefined,
  },
  reducers: {
    resetSearchFund: state => {
      state.data = undefined;
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getSearchFundProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(getSearchFundProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.status = action.payload?.data?.status),
          (state.message = action.payload?.message),
          (state.data = action.payload?.data?.data);
      })
      .addCase(getSearchFundProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload?.data?.status;
        state.message = action.payload?.message;
      });
  },
});

export const {resetSearchFund} = getSearchFundSlice.actions;
export default getSearchFundSlice.reducer;
