import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("pocketbase_auth_token") || null, // Tokenni localStorage'dan olish
  user: null, // Foydalanuvchi ma'lumotlarini saqlash uchun
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      localStorage.setItem("pocketbase_auth_token", payload.token); // Tokenni localStorage'ga saqlash
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("pocketbase_auth_token"); // Tokenni localStorage'dan o'chirish
    },
  },
});

export const { setCredentials, logout, } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
