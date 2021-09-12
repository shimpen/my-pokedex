import ky, { Options } from 'ky';
import { DEFAULT_API_OPTIONS } from '../config';
import {
  isPokemonsResult,
  PokemonsResult,
} from '../../models/raw/pokemons-result';

// const initialUrl = `https://pokeapi.co/api/v2/pokemon?limit=151`;

const getPokemonsResult = async (
  url: string,
  options?: Options,
): Promise<PokemonsResult> => {
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
  };
  const response = await ky.get(url, mergedOptions);
  const pokemons = (await response.json()) as unknown[];

  if (!isPokemonsResult(pokemons)) {
    throw Error('API type error');
  }

  return pokemons;
};

export default getPokemonsResult;
