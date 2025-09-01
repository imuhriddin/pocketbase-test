import { Login } from "@mui/icons-material";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://back.buyur.yurtal.tech/api/",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "collections/users/records",
    }),
    getUserById: builder.query({
      query: (id) => `collections/users/records/${id}`,
    }),
  }),
});

export const { useGetUsersQuery, useGetUsersByIdQuery } = usersApi;
