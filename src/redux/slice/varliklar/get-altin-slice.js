import {createSlice} from '@reduxjs/toolkit';
import {getAltinProcess} from '../../../api';
export const getAltinSlice = createSlice({
  name: 'goldPrice',
  initialState: {
    isLoading: {},
    status: {},
    message: {},
    data: undefined,
  },
  reducers: {
    resetAltin: state => {
      state.data = undefined;
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAltinProcess.pending, state => {
        state.isLoading = {...state.isLoading, getAltinProcess: true};
      })
      .addCase(getAltinProcess.fulfilled, (state, action) => {
        state.isLoading = {...state.isLoading, getAltinProcess: false};
        state.status = {
          ...state.status,
          getAltinProcess: action.payload?.status,
        };
        state.message = {
          ...state.message,
          getAltinProcess: action.payload?.message,
        };
        state.data = action.payload?.data?.result;
      })
      .addCase(getAltinProcess.rejected, (state, action) => {
        state.isLoading = {...state.isLoading, getAltinProcess: false};
      });
  },
});

export const {resetAltin} = getAltinSlice.actions;
export default getAltinSlice.reducer;
