import {createSlice} from '@reduxjs/toolkit';
import {authLogin} from '../../../api';

export const loginSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: null,
    status: undefined,
    isAuthenticated: '-1',
    isLoading: {},
    message: undefined,
  },
  //   reducers: {
  //     setCredentials: (state, action) => {
  //       const { accessToken } = action.payload;
  //       state.token = accessToken;
  //     },
  //     logOut: (state, action) => {
  //       state.token = null;
  //     },
  //   },

  reducers: {
    changeAuthentication: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    resetAuth: state => {
      state.status = undefined;
      state.isLoading = {};
      state.isAuthenticated = '0';
      state.message = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(authLogin.pending, state => {
        state.isLoading = true;
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        state.accessToken = action.payload;
        state.status = 'success';
        state.isAuthenticated = '1';
        state.isLoading = false;
        state.message = action.payload?.message;
      })
      .addCase(authLogin.rejected, (state, action) => {
        state.status = 'error';
        state.isAuthenticated = '0';
        state.isLoading = false;
        state.message = action.error?.message;
      });
  },
});

export const {resetAuth, changeAuthentication} = loginSlice.actions;

// export const { setCredentials, logOut } = loginSlice.actions;

export default loginSlice.reducer;

export const selectCurrentToken = state => state.auth.token;
