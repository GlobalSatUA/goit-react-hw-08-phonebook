import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations'; 


const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setToken(state, action) {
        state.token = action.payload;
      },
    },
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      setToken(action.payload.token);
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      setToken(action.payload.token);
    },
    [logOut.fulfilled](state) {
      state.contacts = [];
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { setToken } = authSlice.actions;
export const selectToken = (state) => state.auth.token;
