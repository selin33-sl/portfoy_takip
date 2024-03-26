import {createSlice} from '@reduxjs/toolkit';
import {getCurrencyDetailProcess} from '../../../../api';
export const getCurrencyDetailSlice = createSlice({
  name: 'getCurrencyDetail',
  initialState: {
    isLoading: {},
    status: {},
    message: {},
    data: undefined,
  },
  reducers: {
    resetCurrencyDetail: state => {
      state.data = undefined;
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder

      .addCase(getCurrencyDetailProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCurrencyDetailProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.status = action.payload?.status),
          (state.message = action.payload?.message),
          (state.data = action.payload?.data?.data);
      })
      .addCase(getCurrencyDetailProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload?.errorCode;
        state.message = action.payload?.message;
      });
  },
});

export const {resetCurrencyDetail} = getCurrencyDetailSlice.actions;
export default getCurrencyDetailSlice.reducer;
