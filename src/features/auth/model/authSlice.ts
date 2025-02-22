import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  username: string | null;
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  username: null,
  token: null,
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(
      state: UserState,
      action: PayloadAction<{ username: string; token: string }>,
    ) {
      state.username = action.payload.username;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    clearUser(state) {
      state.username = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const actions = userSlice.actions;
