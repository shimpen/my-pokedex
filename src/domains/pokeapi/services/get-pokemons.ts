import getPokemonsRow from './raw/get-pokemons';
import getPokemon from './raw/get-pokemon';
import getSpecies from './raw/get-species';
import getType from './raw/get-type';
import { isPokemonsResult, PokemonsResult } from '../models/pokemons';
import { Url } from '../data/region-url-list';

const initialUrl: Url = `https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`;

// どっかでregionUrlMap[region] で初期の値を取得するようにするはず...

const getPokemonsResult = async (
  url: Url = initialUrl,
): Promise<PokemonsResult> => {
  const pokemonsRow = await getPokemonsRow(url);
  const pokemons = await Promise.all(
    pokemonsRow.results.map(async (result) => {
      // pokemonとspeciesも並列処理に変えたい
      const pokemon = await getPokemon(result.url);
      const species = await getSpecies(pokemon.species.url);
      const types = await Promise.all(
        pokemon.types.map((type) => getType(type.type.name)),
      );

      return { ...pokemon, species, types };
    }),
  );

  const pokemonsResult = {
    next: pokemonsRow.next,
    previous: pokemonsRow.previous,
    pokemons,
  };

  if (!isPokemonsResult(pokemonsResult)) {
    throw Error('API type error');
  }

  return pokemonsResult;
};

export default getPokemonsResult;
