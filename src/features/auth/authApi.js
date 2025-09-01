import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://back.buyur.yurtal.tech/api/collections/",
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: ({ email, password }) => ({
        url: "users/auth-with-password", // 🔹 PocketBase login endpoint
        method: "POST",
        body: {
          identity: email,
          password,
        },
      }),
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
