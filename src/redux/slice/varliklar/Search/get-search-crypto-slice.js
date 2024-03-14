import {createSlice} from '@reduxjs/toolkit';
import {getSearchCryptoProcess} from '../../../../api';

export const getSearchCryptoSlice = createSlice({
  name: 'searchCrypto',
  initialState: {
    isLoading: {},
    status: {},
    message: {},
    data: undefined,
  },
  reducers: {
    resetSearchCrypto: state => {
      state.data = undefined;
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getSearchCryptoProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(getSearchCryptoProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.status = action.payload?.data?.status),
          (state.message = action.payload?.message),
          (state.data = action.payload?.data);
      })
      .addCase(getSearchCryptoProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload?.data?.status;
        state.message = action.payload?.message;
      });
  },
});

export const {resetSearchCrypto} = getSearchCryptoSlice.actions;
export default getSearchCryptoSlice.reducer;
