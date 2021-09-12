export type Pokemon = {
  name: string;
  url: string;
};

export type PokemonsResult = {
  next: string | null;
  previous: string | null;
  results: Pokemon[];
};

const isPokemon = (arg: unknown): arg is Pokemon => {
  const u = arg as Pokemon;

  return typeof u?.name === 'string' && typeof u?.url === 'string';
};

const isPokemonsResult = (arg: unknown): arg is PokemonsResult => {
  const u = arg as PokemonsResult;

  return (
    u?.next === null ||
    (typeof u?.next === 'string' && u?.previous === null) ||
    (typeof u?.previous === 'string' &&
      !u?.results.some((pokemon) => !isPokemon(pokemon)))
  );
};

export { isPokemon, isPokemonsResult };
