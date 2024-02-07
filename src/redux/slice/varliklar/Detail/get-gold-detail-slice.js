import {createSlice} from '@reduxjs/toolkit';
import {getGoldDetailProcess} from '../../../../api';
export const getGoldDetailSlice = createSlice({
  name: 'getGoldDetail',
  initialState: {
    isLoading: {},
    status: {},
    message: {},
    data: undefined,
    lastPrice: undefined,
    name: undefined,
  },
  reducers: {
    resetGoldDetail: state => {
      state.data = undefined;
      state.lastPrice = undefined;
      state.name = undefined;
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder

      .addCase(getGoldDetailProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(getGoldDetailProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.status = action.payload?.status),
          (state.message = action.payload?.message),
          (state.lastPrice = action.payload?.data?.lastPrice),
          (state.name = action.payload?.data?.name),
          (state.data = action.payload?.data?.data);
      })
      .addCase(getGoldDetailProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload?.data?.status;
        state.message = action.payload?.message;
      });
  },
});

export const {resetGoldDetail} = getGoldDetailSlice.actions;
export default getGoldDetailSlice.reducer;
