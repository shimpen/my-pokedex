import ky, { Options } from 'ky';
import { DEFAULT_API_OPTIONS } from '../config';
import { isPokemonDetail, PokemonDetail } from '../../models/raw/pokemon';

const getPokemon = async (
  url: string,
  options?: Options,
): Promise<PokemonDetail> => {
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
  };
  const response = await ky.get(
    url, // fixme nameかurlで取得することになるのかな？
    mergedOptions,
  );
  const pokemon = (await response.json()) as unknown[];

  if (!isPokemonDetail(pokemon)) {
    throw Error('API type error');
  }

  return pokemon;
};

export default getPokemon;
