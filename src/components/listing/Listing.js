import PropTypes from 'prop-types';
import Pokemon from '../pokemon/Pokemon';

const Listing = ({ pokemonList, filter }) => {
  if (filter) {
    return (
      <div className="pokemon-list-outer-container">
        <div className="pokemon-list-container">
          {
            pokemonList.map(pokemon => (
              <Pokemon className="pokemon-container" key={pokemon.pokemon.name} pokemon={pokemon.pokemon} />
            ))
          }
        </div>
      </div>
    );
  }

  return (
    <div className="pokemon-list-outer-container">
      <div className="pokemon-list-container">
        {
          pokemonList.map(pokemon => (
            <Pokemon className="pokemon-container" key={pokemon.name} pokemon={pokemon} />
          ))
        }
      </div>
    </div>
  );
};

Listing.propTypes = {
  pokemonList: PropTypes.instanceOf(Array).isRequired,
  filter: PropTypes.bool,
};

Listing.defaultProps = {
  filter: false,
};

export default Listing;
