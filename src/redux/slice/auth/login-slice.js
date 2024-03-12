import {createSlice} from '@reduxjs/toolkit';
import {authLogin, getAllPortfolioProcess} from '../../../api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: null,
    status: undefined,
    isAuthenticated: '-1',
    portfolioId: undefined,
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
    savePortfolioId: (state, action) => {
      state.portfolioId = action.payload;
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
        state.accessToken = action.payload.data.accessToken;
        state.status = action.payload.status;
        state.isAuthenticated = '1';
        state.isLoading = false;
        state.portfolioId = action.payload.data.data.defaultPortfolioId;
        state.message = action.payload?.message;
      })
      .addCase(authLogin.rejected, (state, action) => {
        state.status = action.payload.status;
        state.isAuthenticated = '0';
        state.isLoading = false;
        state.message = action.error?.message;
      });
  },
});

export const {resetAuth, changeAuthentication, savePortfolioId} =
  loginSlice.actions;

// export const { setCredentials, logOut } = loginSlice.actions;

export default loginSlice.reducer;

export const selectCurrentToken = state => state.auth.token;
