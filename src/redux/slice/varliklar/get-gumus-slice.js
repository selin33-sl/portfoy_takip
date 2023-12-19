import {createSlice} from '@reduxjs/toolkit';
import {getGumusProcess} from '../../../api';
export const getGumusSlice = createSlice({
  name: 'silverPrice',
  initialState: {
    isLoading: {},
    status: {},
    message: {},
    data: undefined,
  },
  reducers: {
    resetGumus: state => {
      state.data = undefined;
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getGumusProcess.pending, state => {
        state.isLoading = {...state.isLoading, getGumusProcess: true};
      })
      .addCase(getGumusProcess.fulfilled, (state, action) => {
        state.isLoading = {...state.isLoading, getGumusProcess: false};
        state.status = {
          ...state.status,
          getGumusProcess: action.payload?.status,
        };
        state.message = {
          ...state.message,
          getGumusProcess: action.payload?.message,
        };
        state.data = action.payload?.data?.result;
      })
      .addCase(getGumusProcess.rejected, (state, action) => {
        state.isLoading = {...state.isLoading, getGumusProcess: false};
      });
  },
});

export const {resetGumus} = getGumusSlice.actions;
export default getGumusSlice.reducer;
