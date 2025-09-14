import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./services/usersApi";
import authReducer from "./features/auth/authSlice";
import { authApi } from "./features/auth/authApi";
import { carModelsApi } from "./services/carModelsApi";
import { buttonsApi } from "./services/buttonsApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [carModelsApi.reducerPath]: carModelsApi.reducer,
    [buttonsApi.reducerPath]: buttonsApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(carModelsApi.middleware)
      .concat(buttonsApi.middleware),
});
