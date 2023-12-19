import {createSlice} from '@reduxjs/toolkit';
import {getKriptoProcess} from '../../../api';
export const getKriptoSlice = createSlice({
  name: 'cripto',
  initialState: {
    isLoading: {},
    status: {},
    message: {},
    data: undefined,
  },
  reducers: {
    resetKripto: state => {
      state.data = undefined;
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getKriptoProcess.pending, state => {
        state.isLoading = {...state.isLoading, getKriptoProcess: true};
      })
      .addCase(getKriptoProcess.fulfilled, (state, action) => {
        state.isLoading = {...state.isLoading, getKriptoProcess: false};
        state.status = {
          ...state.status,
          getKriptoProcess: action.payload?.status,
        };
        state.message = {
          ...state.message,
          getKriptoProcess: action.payload?.message,
        };
        state.data = action.payload?.data?.result;
      })
      .addCase(getKriptoProcess.rejected, (state, action) => {
        state.isLoading = {...state.isLoading, getKriptoProcess: false};
      });
  },
});

export const {resetKripto} = getKriptoSlice.actions;
export default getKriptoSlice.reducer;
