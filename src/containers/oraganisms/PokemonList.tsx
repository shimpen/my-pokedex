import { VFC } from 'react';
import { useQuery } from 'react-query';

import PokemonList from '../../components/organisms/PokemonList';
import { getPokemonsResult } from '../../domains/pokeapi';
import { Url } from '../../domains/pokeapi/data/region-url-list';

const EnhancedPokemonList: VFC<{ url: Url }> = ({ url }) => {
  const { data: pokemonsResult } = useQuery(
    [url, 'pokemons'],
    () => getPokemonsResult(url),
    {
      enabled: true,
    },
  );

  if (!pokemonsResult) return <div>No data</div>; // なんでpokemonResultがundefinedを取りうるのか...

  return <PokemonList result={pokemonsResult} />;
};

export default EnhancedPokemonList;