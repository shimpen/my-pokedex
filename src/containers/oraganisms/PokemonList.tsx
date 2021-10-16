import { VFC } from 'react';
import { useInfiniteQuery } from 'react-query';

import Box from '@material-ui/core/Box';
import Spinner from 'components/molecules/Spinner';
import PokemonList from '../../components/organisms/PokemonList';
import { getPokemonsResult } from '../../domains/pokeapi';
import { Url } from '../../domains/pokeapi/data/region-url-list';

import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const EnhancedPokemonList: VFC<{ url: Url }> = ({ url }) => {
  const {
    data: pokemonsResults,
    fetchNextPage,
    hasNextPage,
    // isFetchingNextPage,
    // isFetching,
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

  // 無限スクロール用
  const { loadMoreRef } = useIntersectionObserver({
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });

  // TODO: ref、callbackRefの扱いが理解できておらず、semantic-uiのBoxの作りのおかげで動いているだけなので詳細把握に努める。
  // MEMO: 初期描画時に追加分用のBOXも反応してPokemonList先のSuspenseが動くので、ここでSpinner表示をしている。
  // TODO: 初期描画中は反応しないように修正する必要あり。
  return (
    <>
      {pokemonsResults?.pages.map((pokemonsResult) => (
        <PokemonList key={pokemonsResult.next} result={pokemonsResult} />
      ))}
      <Box {...{ ref: loadMoreRef }} textAlign="center">
        {hasNextPage && <Spinner size="medium" />}
      </Box>
    </>
  );
};

export default EnhancedPokemonList;
