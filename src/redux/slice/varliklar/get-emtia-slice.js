import {createSlice} from '@reduxjs/toolkit';
import {getEmtiaProcess} from '../../../api';
export const getEmtiaSlice = createSlice({
  name: 'emtia',
  initialState: {
    isLoading: {},
    status: {},
    message: {},
    data: undefined,
  },
  reducers: {
    resetEmtia: state => {
      state.data = undefined;
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getEmtiaProcess.pending, state => {
        state.isLoading = {...state.isLoading, getEmtiaProcess: true};
      })
      .addCase(getEmtiaProcess.fulfilled, (state, action) => {
        state.isLoading = {...state.isLoading, getEmtiaProcess: false};
        state.status = {
          ...state.status,
          getEmtiaProcess: action.payload?.status,
        };
        state.message = {
          ...state.message,
          getEmtiaProcess: action.payload?.message,
        };
        state.data = action.payload?.data?.result;
      })
      .addCase(getEmtiaProcess.rejected, (state, action) => {
        state.isLoading = {...state.isLoading, getEmtiaProcess: false};
      });
  },
});

export const {resetEmtia} = getEmtiaSlice.actions;
export default getEmtiaSlice.reducer;
