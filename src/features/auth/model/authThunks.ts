import { createAsyncThunk } from '@reduxjs/toolkit';

import { LoginCredentials, User } from '@/shared/types';
import { fakeApiLogin } from '@/shared/utils/fakeApi';

export const loginThunk = createAsyncThunk<User, LoginCredentials>(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const user = await fakeApiLogin(credentials);
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message as string);
    }
  },
);
