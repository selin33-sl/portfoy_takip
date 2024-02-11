import {createSlice} from '@reduxjs/toolkit';
import {getGoldDetailProcess} from '../../../../api';
export const getGoldDetailSlice = createSlice({
  name: 'getGoldDetail',
  initialState: {
    isLoading: {},
    status: {},
    message: {},
    data: undefined,
  },
  reducers: {
    resetGoldDetail: state => {
      state.data = undefined;
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
          (state.data = action.payload?.data);
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
