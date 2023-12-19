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
        state.isLoading = {...state.isLoading, getHisseSenediProcess: true};
      })
      .addCase(getHisseSenediProcess.fulfilled, (state, action) => {
        state.isLoading = {...state.isLoading, getHisseSenediProcess: false};
        state.status = {
          ...state.status,
          getHisseSenediProcess: action.payload?.status,
        };
        state.message = {
          ...state.message,
          getHisseSenediProcess: action.payload?.message,
        };
        state.data = action.payload?.data?.result;
      })
      .addCase(getHisseSenediProcess.rejected, (state, action) => {
        state.isLoading = {...state.isLoading, getHisseSenediProcess: false};
      });
  },
});

export const {resetHisseSenedi} = getHisseSenediSlice.actions;
export default getHisseSenediSlice.reducer;
