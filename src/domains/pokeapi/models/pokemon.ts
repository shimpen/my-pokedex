import { Species, isSpecies } from './raw/species';
import { Type, isType } from './raw/type';

export type Pokemon = {
  id: number;
  name: string;
  species: Species;
  types: Type[];
  sprites: {
    // どうにかしたいな...imagesでまとめたい
    frontDefault: string;
    other: {
      officialArtwork: {
        frontDefault: string;
      };
    };
  };
};

const isPokemon = (arg: unknown): arg is Pokemon => {
  const p = arg as Pokemon;

  return (
    typeof p?.id === 'number' &&
    typeof p?.name === 'string' &&
    isSpecies(p?.species) &&
    !p?.types.some((type) => !isType(type)) &&
    typeof p?.sprites.frontDefault === 'string' &&
    typeof p?.sprites.other.officialArtwork.frontDefault === 'string'
  );
};

export { isPokemon };
