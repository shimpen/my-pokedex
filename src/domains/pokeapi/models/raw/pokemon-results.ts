export type PokemonResult = {
  name: string;
  url: string;
};

export type PokemonResults = {
  next: string | null;
  previous: string | null;
  results: PokemonResult[];
};

const isPokemonResult = (arg: unknown): arg is PokemonResult => {
  const u = arg as PokemonResult;

  return typeof u?.name === 'string' && typeof u?.url === 'string';
};

const isPokemonResults = (arg: unknown): arg is PokemonResults => {
  const u = arg as PokemonResults;

  return (
    u?.next === null ||
    (typeof u?.next === 'string' && u?.previous === null) ||
    (typeof u?.previous === 'string' &&
      !u?.results.some((result) => !isPokemonResult(result)))
  );
};

export { isPokemonResult, isPokemonResults };
