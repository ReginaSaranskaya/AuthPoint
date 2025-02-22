import { configureStore } from '@reduxjs/toolkit';

import { userSlice } from '@/features/auth/model/authSlice';

export const store = configureStore({
  reducer: {
    auth: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
