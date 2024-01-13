import {createSlice} from '@reduxjs/toolkit';
import {registerProcess} from '../../../api';

export const registerSlice = createSlice({
  name: 'register',
  initialState: {
    isLoading: {},
    status: undefined,
    message: {},
  },
  reducers: {
    resetRegister: state => {
      state.isLoading = {};
      state.status = undefined;
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerProcess.pending, state => {
        state.isLoading = true;
      })
      .addCase(registerProcess.fulfilled, (state, action) => {
        (state.status = action.payload?.status), (state.isLoading = false);
        state.message = action.payload?.message;
      })
      .addCase(registerProcess.rejected, (state, action) => {
        console.error('Error in registerProcess:', action.error);
        state.status = 'error';
        state.isLoading = false;
        state.message = action.error?.message;
      });
  },
});
export const {resetRegister} = registerSlice.actions;
export default registerSlice.reducer;
