import { MetaI } from "_shared/domain/dto/main.interfaces";

export interface PokemonRes extends MetaI {
  results: Data[];
}

export interface Data {
  name: string;
  url: string;
}
