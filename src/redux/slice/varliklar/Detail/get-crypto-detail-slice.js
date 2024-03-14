import {createSlice} from '@reduxjs/toolkit';
import {getCryptoDetailProcess} from '../../../../api';
export const getCryptoDetailSlice = createSlice({
  name: 'getCryptoDetail',
  initialState: {
    isLoading: {},
    status: {},
    message: {},
    data: undefined,
  },
  reducers: {
    resetCryptoDetail: state => {
      state.data = undefined;
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder

      .addCase(getCryptoDetailProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCryptoDetailProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.status = action.payload?.status),
          (state.message = action.payload?.message),
          (state.data = action.payload?.data);
      })
      .addCase(getCryptoDetailProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload?.errorCode;
        state.message = action.payload?.message;
      });
  },
});

export const {resetCryptoDetail} = getCryptoDetailSlice.actions;
export default getCryptoDetailSlice.reducer;
