import {createSlice} from '@reduxjs/toolkit';
import {getSearchGoldProcess} from '../../../../api';

export const getSearchGoldSlice = createSlice({
  name: 'searchGold',
  initialState: {
    isLoading: {},
    status: {},
    message: {},
    data: undefined,
  },
  reducers: {
    resetSearchGold: state => {
      state.data = undefined;
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getSearchGoldProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(getSearchGoldProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.status = action.payload?.data?.status),
          (state.message = action.payload?.message),
          (state.data = action.payload?.data?.data);
      })
      .addCase(getSearchGoldProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload?.data?.status;
        state.message = action.payload?.message;
      });
  },
});

export const {resetSearchGold} = getSearchGoldSlice.actions;
export default getSearchGoldSlice.reducer;
