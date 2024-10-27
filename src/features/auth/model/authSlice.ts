import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthState, User } from '@/shared/types';
import { loginThunk } from './authThunks';

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state: AuthState) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state: AuthState) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loginThunk.fulfilled,
        (state: AuthState, action: PayloadAction<User>) => {
          state.loading = false;
          state.user = action.payload;
        },
      )
      .addCase(
        loginThunk.rejected,
        (state: AuthState, action: PayloadAction<string>) => {
          state.loading = false;
          state.error = action.payload;
        },
      );
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
