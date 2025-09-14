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

export const carModelsApi = createApi({
  reducerPath: "carModelsApi",
  baseQuery,
  endpoints: (builder) => ({
    getCarModels: builder.query({
      query: () => "collections/car_models/records",
    }),
    getCarModelsById: builder.query({
      query: (id) => `collections/car_models/records/${id}`,
    }),
  }),
});

export const { useGetCarModelsQuery, useGetCarModelsByIdQuery } = carModelsApi;
