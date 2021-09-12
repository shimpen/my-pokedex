export type PokemonDetail = {
  id: number;
  name: string;
  species: {
    name: string;
    url: string;
  };
  types: PokemonType[];
  sprites: {
    frontDefault: string;
    other: {
      officialArtwork: {
        frontDefault: string;
      };
    };
  };
};

export type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

const isPokemonType = (arg: unknown): arg is PokemonType => {
  const p = arg as PokemonType;

  return (
    typeof p?.slot === 'number' &&
    typeof p?.type.name === 'string' &&
    typeof p?.type.url === 'string'
  );
};

const isPokemonDetail = (arg: unknown): arg is PokemonDetail => {
  const p = arg as PokemonDetail;

  return (
    typeof p?.id === 'number' &&
    typeof p?.name === 'string' &&
    typeof p?.species.name === 'string' &&
    typeof p?.species.url === 'string' &&
    !p?.types.some((type) => !isPokemonType(type)) &&
    typeof p?.sprites.frontDefault === 'string' &&
    typeof p?.sprites.other.officialArtwork.frontDefault === 'string'
  );
};

export { isPokemonDetail };
