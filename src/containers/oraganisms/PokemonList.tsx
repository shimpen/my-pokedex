/* eslint-disable no-console */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
import { VFC } from 'react';
// import { useQuery } from 'react-query';
import { useInfiniteQuery } from 'react-query';

import PokemonList from '../../components/organisms/PokemonList';
import { getPokemonsResult } from '../../domains/pokeapi';
import { Url } from '../../domains/pokeapi/data/region-url-list';

const EnhancedPokemonList: VFC<{ url: Url }> = ({ url }) => {
  // const { data: pokemonsResult } = useQuery(
  //   [url, 'pokemons'],
  //   () => getPokemonsResult(url),
  //   {
  //     enabled: true,
  //   },
  // );

  const {
    data: pokemonsResults,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    status, // 結局Suspenseは使えているのでstatusは不要なはず
  } = useInfiniteQuery(
    // 'pokemons', // move tabs, the query key that 'pokemons' is conflict and cannot re render.
    `pokemons-${url}`, // FIXME: refactor more better query key
    async ({ pageParam = url }) => {
      const res = await getPokemonsResult(pageParam);

      return res;
    },
    {
      getNextPageParam: (lastPage) => lastPage.next,
      enabled: true,
    },
  );

  if (!pokemonsResults) {
    throw Error('getPokemonsResult error');
  }

  return status === 'loading' ? (
    <p>Loading...</p>
  ) : status === 'error' ? (
    <p>Error</p>
  ) : (
    <>
      {pokemonsResults?.pages.map((pokemonsResult) => (
        <PokemonList key={pokemonsResult.next} result={pokemonsResult} />
      ))}
      <div>
        <button
          onClick={() => fetchNextPage()} // FIXME: もっとみるのボタンをより奥のsuspenseに隠すか、intersectionObserverでの実装を行う
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </>
  );
};

export default EnhancedPokemonList;
