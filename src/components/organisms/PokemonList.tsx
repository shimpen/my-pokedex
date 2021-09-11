import { VFC } from 'react';
import { Card, Image } from 'semantic-ui-react';

import { PokemonsResult } from '../../domains/pokeapi';
import './PokemonList.css';

const PokemonList: VFC<{ result: PokemonsResult }> = ({ result }) => (
  <>
    <Card.Group className="cards-container">
      {result.pokemons.map((pokemon) => (
        <Card className="card-container" key={pokemon.id}>
          <div className="card-header">
            <div>
              <Card.Meta textAlign="left">{pokemon.id}</Card.Meta>
              <Image size="mini" src={pokemon.sprites.frontDefault} />
            </div>
            <div>
              <Card.Header textAlign="center">
                {
                  pokemon.species.names.find(
                    (name) => name.language.name === 'ja',
                  )?.name
                }
              </Card.Header>
              <Card.Header textAlign="center">{pokemon.name}</Card.Header>
            </div>
            <div className="card-header__type">
              {pokemon.types.map((type) =>
                type.names.map(
                  (name) =>
                    name.language.name === 'ja-Hrkt' && (
                      <Card.Header textAlign="right" key={name.name}>
                        {name.name}
                      </Card.Header>
                    ),
                ),
              )}
            </div>
          </div>
          <div className="card-image">
            <Image
              size="large"
              src={pokemon.sprites.other.officialArtwork.frontDefault}
              rounded
            />
          </div>
          <div className="card-genera">
            <Card.Description>
              {
                pokemon.species.genera.find(
                  (genus) => genus.language.name === 'ja',
                )?.genus
              }
            </Card.Description>
            <Card.Description>
              {
                pokemon.species.genera.find(
                  (genus) => genus.language.name === 'en',
                )?.genus
              }
            </Card.Description>
          </div>
          <div className="card-description">
            <Card.Description>
              {
                pokemon.species.flavorTextEntries.find(
                  (text) => text.language.name === 'ja',
                )?.flavorText
              }
            </Card.Description>
            <Card.Description>
              {
                pokemon.species.flavorTextEntries.find(
                  (text) => text.language.name === 'en',
                )?.flavorText
              }
            </Card.Description>
          </div>
        </Card>
      ))}
    </Card.Group>
  </>
);

export default PokemonList;
