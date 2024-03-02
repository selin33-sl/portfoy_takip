import {createSlice} from '@reduxjs/toolkit';
import {getFundDetailProcess} from '../../../../api';
export const getFundDetailSlice = createSlice({
  name: 'getFundDetail',
  initialState: {
    isLoading: {},
    status: {},
    message: {},
    data: undefined,
  },
  reducers: {
    resetFundDetail: state => {
      state.data = undefined;
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder

      .addCase(getFundDetailProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(getFundDetailProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.status = action.payload?.status),
          (state.message = action.payload?.message),
          (state.data = action.payload?.data);
      })
      .addCase(getFundDetailProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload?.data?.status;
        state.message = action.payload?.message;
      });
  },
});

export const {resetFundDetail} = getFundDetailSlice.actions;
export default getFundDetailSlice.reducer;
