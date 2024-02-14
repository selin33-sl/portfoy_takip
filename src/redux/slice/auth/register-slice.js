import {createSlice} from '@reduxjs/toolkit';
import {registerProcess} from '../../../api';

export const registerSlice = createSlice({
  name: 'register',
  initialState: {
    isLoading: {},
    status: undefined,
    message: {},
    portfolioId: undefined,
  },
  reducers: {
    resetRegister: state => {
      state.isLoading = {};
      state.status = undefined;
      state.message = {};
      state.portfolioId = undefined;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(registerProcess.fulfilled, (state, action) => {
        state.status = action.payload.status;
        state.isLoading = false;
        state.message = action.payload?.message;
        state.portfolioId = action.payload?.portfolioId;
      })
      .addCase(registerProcess.rejected, (state, action) => {
        state.status = action.payload.status;
        state.isLoading = false;
        state.message = action.error?.message;
      });
  },
});
export const {resetRegister} = registerSlice.actions;
export default registerSlice.reducer;
