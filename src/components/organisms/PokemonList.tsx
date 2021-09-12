import { VFC } from 'react';
import { Card } from 'semantic-ui-react';

import EnhancedPokemon from '../../containers/molecules/Pokemon';
import { PokemonsResult } from '../../domains/pokeapi';
import './PokemonList.css';

const PokemonList: VFC<{ result: PokemonsResult }> = ({ result }) => (
  <>
    <Card.Group className="cards-container">
      {result.results.map((pokemon) => (
        <EnhancedPokemon url={pokemon.url} key={pokemon.name} />
      ))}
    </Card.Group>
  </>
);

export default PokemonList;
