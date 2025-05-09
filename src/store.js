// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/slice/authSlice';
import userReducer from '@/slice/userSlice';
import { loginApi } from '@/services/loginApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    [loginApi.reducerPath]: loginApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(loginApi.middleware);
  }
});
