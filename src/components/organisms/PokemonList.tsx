/* eslint-disable no-console */
// import Spinner from 'components/molecules/Spinner';
import ErrorBoundary from 'ErrorBoundary';
import { Suspense, SuspenseList, VFC } from 'react';
import { Card } from 'semantic-ui-react';

import EnhancedPokemon from '../../containers/molecules/Pokemon';
import { PokemonsResult } from '../../domains/pokeapi';
import './PokemonList.css';

// MEMO: Suspenseのfallbackを空にしている。これはuseInfiniteQueryと
// useIntersectionObserverのところで初期描画の時点でrefを設定しているBoxが描画されてしまうため。
// こちらでfallback表示すると、初期表示分と追加表示分が同時にローディングされてしまう。
const PokemonList: VFC<{ result: PokemonsResult }> = ({ result }) => (
  <>
    <ErrorBoundary>
      <SuspenseList>
        <Suspense fallback="">
          <Card.Group className="cards-container">
            {result.results.map((pokemon) => (
              <EnhancedPokemon url={pokemon.url} key={pokemon.name} />
            ))}
          </Card.Group>
        </Suspense>
      </SuspenseList>
    </ErrorBoundary>
  </>
);

export default PokemonList;
