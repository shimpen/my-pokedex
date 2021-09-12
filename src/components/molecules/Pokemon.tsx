import { VFC } from 'react';
import { Card, Image } from 'semantic-ui-react';

import { PokemonDetail, Species, Type } from '../../domains/pokeapi';
import './Pokemon.css';

const Pokemon: VFC<{
  pokemon: PokemonDetail;
  species: Species;
  types: Type[];
}> = ({ pokemon, species, types }) => (
  <>
    <Card className="card-container" key={pokemon.id}>
      <div className="card-header">
        <div>
          <Card.Meta textAlign="left">{pokemon.id}</Card.Meta>
          <Image size="mini" src={pokemon.sprites.frontDefault} />
        </div>
        <div>
          <Card.Header textAlign="center">
            {species.names.find((name) => name.language.name === 'ja')?.name}
          </Card.Header>
          <Card.Header textAlign="center">{pokemon.name}</Card.Header>
        </div>
        <div className="card-header__type">
          {types.map((type) =>
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
          {species.genera.find((genus) => genus.language.name === 'ja')?.genus}
        </Card.Description>
        <Card.Description>
          {species.genera.find((genus) => genus.language.name === 'en')?.genus}
        </Card.Description>
      </div>
      <div className="card-description">
        <Card.Description>
          {
            species.flavorTextEntries.find(
              (text) => text.language.name === 'ja',
            )?.flavorText
          }
        </Card.Description>
        <Card.Description>
          {
            species.flavorTextEntries.find(
              (text) => text.language.name === 'en',
            )?.flavorText
          }
        </Card.Description>
      </div>
    </Card>
  </>
);

export default Pokemon;
