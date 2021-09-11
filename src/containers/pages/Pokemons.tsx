import { VFC } from 'react';
import { useQueryClient } from 'react-query';

import { regionList } from '../../data/region-list';
import { Url } from '../../domains/pokeapi/data/region-url-list';
import { getPokemonsResult } from '../../domains/pokeapi';
import Pokemons from '../../components/pages/Pokemons';

const EnhancedPokemons: VFC<{ enablePrefetch?: boolean }> = ({
  enablePrefetch = false,
}) => {
  const queryClient = useQueryClient();
  const prefetch = (url: Url): void => {
    const load = async (): Promise<void> => {
      try {
        await queryClient.prefetchQuery([url, 'pokemons'], () =>
          getPokemonsResult(url),
        );
      } catch (error) {
        console.error(error); // eslint-disable-line no-console
      }
    };

    void load();
  };
  const pokemonsProps = enablePrefetch
    ? { regionList, prefetch }
    : { regionList };

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Pokemons {...pokemonsProps} />;
};

export default EnhancedPokemons;
