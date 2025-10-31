import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Data } from "domain/dto/pokemon/res.interfaces";

export interface DataPokemon extends Data {
  id:string;
}

export interface PokemonStateI {
  loading: boolean;
  data?: DataPokemon[];
  error?: string;
  success: boolean;
}

const initialState: PokemonStateI = {
  loading: false,
  data: [],
  error: undefined,
  success: false,
};

type PokemonInfoPayload = {
  payload: Data[];
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {

    addPokemon: (state, action: PayloadAction<DataPokemon>) => {
      if (!state.data) state.data = [];
      state.data.push(action.payload);
    },

    editPokemonName: (
      state,
      action: PayloadAction<{ id: string; newName: string }>
    ) => {
      const { id, newName } = action.payload;
      const pokemon = state.data?.find((p) => p.id === id);
      if (pokemon) {
        pokemon.name = newName;
      }
    },

    deletePokemon: (state, action: PayloadAction<string>) => {
      state.data = state.data?.filter((p) => p.id !== action.payload);
    },
     deleteAllPokemon: (state) => {
      state.data = [];
    },
  },
});

export const {
  addPokemon,
  editPokemonName,
  deletePokemon,
  deleteAllPokemon
} = pokemonSlice.actions;

export default pokemonSlice.reducer;
