import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

// TODO: check api url endpoint from env
const baseQuery = fetchBaseQuery({ baseUrl: ProcessingInstruction.env.REACT_APP_API_URL });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({}),
});
