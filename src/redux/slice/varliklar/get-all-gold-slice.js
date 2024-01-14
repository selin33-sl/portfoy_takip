import {createSlice} from '@reduxjs/toolkit';
import {getAllGoldProcess} from '../../../api';
export const getAllGoldSlice = createSlice({
  name: 'getAllGold',
  initialState: {
    isLoading: {},
    status: {},
    message: {},
    data: undefined,
  },
  reducers: {
    resetAllGold: state => {
      state.data = undefined;
      state.isLoading = {};
      state.status = {};
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllGoldProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllGoldProcess.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.status = action.payload?.status),
          (state.message = action.payload?.message),
          (state.data = action.payload?.data?.data);
      })
      .addCase(getAllGoldProcess.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.payload?.errorCode;
        state.message = action.payload?.message;
      });
  },
});

export const {resetAllGold} = getAllGoldSlice.actions;
export default getAllGoldSlice.reducer;
