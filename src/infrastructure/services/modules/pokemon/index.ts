import { Query } from "_shared/domain/dto/main.interfaces";
import { PokemonRes } from "domain/dto/pokemon/res.interfaces";
import { PokemonApi } from "infrastructure/services/api";

export const pokemonApi = PokemonApi.injectEndpoints({
  endpoints: (build) => ({
    getPokemon: build.query<PokemonRes, Query>({
      query: (params) => ({ url: `/pokemon`, params }),
      keepUnusedDataFor: 0,
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetPokemonQuery,
} = pokemonApi;
