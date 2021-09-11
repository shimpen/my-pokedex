import { isPokemon, Pokemon } from './pokemon';

export type PokemonsResult = {
  next: string;
  previous: string;
  pokemons: Pokemon[];
};

const isPokemonsResult = (arg: unknown): arg is PokemonsResult => {
  const p = arg as PokemonsResult;

  return (
    p?.next === null ||
    (typeof p?.next === 'string' && p?.previous === null) ||
    (typeof p?.previous === 'string' &&
      !p?.pokemons.some((pokemon) => !isPokemon(pokemon)))
  );
};

export { isPokemonsResult };
