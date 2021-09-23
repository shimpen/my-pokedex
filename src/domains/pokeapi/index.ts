export * from './models/raw/pokemons-result';
export * from './models/raw/pokemon';
export * from './models/raw/species';
export * from './models/raw/type';

export { default as getPokemonsResult } from './services/raw/get-pokemons';
export { default as getPokemon } from './services/raw/get-pokemon';
export { default as getSpecies } from './services/raw/get-species';
export { default as getType } from './services/raw/get-type'; // fixme: url使うように直した影響修正
