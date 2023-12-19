import {createSlice} from '@reduxjs/toolkit';
import {getDovizProcess} from '../../../api';
export const getDovizSlice = createSlice({
  name: 'allCurrency',
  initialState: {
    isLoading: {},
    status: {},
    message: {},
    data: undefined,
  },
  reducers: {
    resetDoviz: state => {
      state.data = undefined;
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getDovizProcess.pending, state => {
        state.isLoading = {...state.isLoading, getDovizProcess: true};
      })
      .addCase(getDovizProcess.fulfilled, (state, action) => {
        state.isLoading = {...state.isLoading, getDovizProcess: false};
        state.status = {
          ...state.status,
          getDovizProcess: action.payload?.status,
        };
        state.message = {
          ...state.message,
          getDovizProcess: action.payload?.message,
        };
        state.data = action.payload?.data?.result;
      })
      .addCase(getDovizProcess.rejected, (state, action) => {
        state.isLoading = {...state.isLoading, getDovizProcess: false};
      });
  },
});

export const {resetDoviz} = getDovizSlice.actions;
export default getDovizSlice.reducer;
