import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

const Listing = ({ pokemonList, onClick, filter }) => {
  if (filter) {
    return (
      <div className="pokemon-list-outer-container">
        <div className="pokemon-list-container">
          {
            pokemonList.map(pokemon => (
              <Pokemon className="pokemon-container" onClick={onClick} key={pokemon.pokemon.name} pokemon={pokemon.pokemon} />
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
            <Pokemon className="pokemon-container" onClick={onClick} key={pokemon.name} pokemon={pokemon} />
          ))
        }
      </div>
    </div>
  );
};

Listing.propTypes = {
  pokemonList: PropTypes.instanceOf(Array).isRequired,
  onClick: PropTypes.func.isRequired,
  filter: PropTypes.bool,
};

Listing.defaultProps = {
  filter: false,
};

export default Listing;
