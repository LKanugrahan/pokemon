import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_REST_HOST,
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

export const Api = createApi({
  baseQuery: baseQuery,
  reducerPath: "usersApi",
  endpoints: () => ({}),
});

export const basePokemonQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_POKEMON_API,
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

export const PokemonApi = createApi({
  baseQuery: basePokemonQuery,
  reducerPath: "pokemonApi",
  endpoints: () => ({}),
});
