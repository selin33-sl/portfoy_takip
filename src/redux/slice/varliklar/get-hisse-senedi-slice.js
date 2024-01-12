import {createSlice} from '@reduxjs/toolkit';
import {getHisseSenediProcess} from '../../../api';
export const getHisseSenediSlice = createSlice({
  name: 'hisseSenedi',
  initialState: {
    isLoading: {},
    status: {},
    message: {},
    data: undefined,
  },
  reducers: {
    resetHisseSenedi: state => {
      state.data = undefined;
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder

      .addCase(getHisseSenediProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(getHisseSenediProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.status = action.payload?.status),
          (state.message = action.payload?.message),
          (state.data = action.payload?.data?.result);
      })
      .addCase(getHisseSenediProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload?.errorCode;
        state.message = action.payload?.message;
      });
  },
});

export const {resetHisseSenedi} = getHisseSenediSlice.actions;
export default getHisseSenediSlice.reducer;
