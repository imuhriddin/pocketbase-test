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

export const buttonsApi = createApi({
  reducerPath: "buttonsApi",
  baseQuery,
  endpoints: (builder) => ({
    getButtons: builder.query({
      query: () => "collections/buttons/records",
    }),
    getButtonById: builder.query({
      query: (id) => `collections/buttons/records/${id}`,
    }),
  }),
});

export const { useGetButtonsQuery } = buttonsApi;
