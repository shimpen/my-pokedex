import ky, { Options } from 'ky';
import { DEFAULT_API_OPTIONS } from '../config';
import {
  isPokemonResults,
  PokemonResults,
} from '../../models/raw/pokemon-results';

// const initialUrl = `https://pokeapi.co/api/v2/pokemon?limit=151`;

const getPokemonsRow = async (
  url: string,
  options?: Options,
): Promise<PokemonResults> => {
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
  };
  const response = await ky.get(url, mergedOptions);
  const pokemons = (await response.json()) as unknown[];

  if (!isPokemonResults(pokemons)) {
    throw Error('API type error');
  }

  return pokemons;
};

export default getPokemonsRow;
