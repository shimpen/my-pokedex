import { VFC } from 'react';
import { useQuery } from 'react-query';

import Pokemon from '../../components/molecules/Pokemon';
import { getPokemon, getSpecies, getType } from '../../domains/pokeapi';

const EnhancedPokemon: VFC<{ url: string }> = ({ url }) => {
  const { data: pokemon } = useQuery([url, 'pokemon'], () => getPokemon(url), {
    enabled: !!url,
  });
  if (!pokemon) {
    throw Error('getPokemon error');
  }

  const { data: species } = useQuery(
    [pokemon.species.name, 'species'],
    () => getSpecies(pokemon.species.url),
    {
      enabled: !!pokemon.species.url,
    },
  );
  if (!species) {
    throw Error('getSpecies error');
  }

  const { data: type1 } = useQuery(
    [pokemon.types[0].type.name, 'type'],
    () => getType(pokemon.types[0].type.url),
    {
      enabled: !!pokemon.types[0],
    },
  );
  if (!type1) {
    throw Error('getType error');
  }

  // fixme: type2を頑張ってとっているけどやり方ありそう...
  const { data: type2 } = useQuery(
    [
      pokemon.types.length >= 2
        ? pokemon.types[1].type.name
        : pokemon.types[0].type.name,
      'type',
    ],
    () =>
      getType(
        pokemon.types.length >= 2
          ? pokemon.types[1].type.url
          : pokemon.types[0].type.url,
      ),
    {
      enabled: pokemon.types.length >= 2,
    },
  );
  if (!type2) {
    throw Error('getType error');
  }

  const types = pokemon.types.length >= 2 ? [type1, type2] : [type1];

  return <Pokemon pokemon={pokemon} species={species} types={types} />;
};

export default EnhancedPokemon;
