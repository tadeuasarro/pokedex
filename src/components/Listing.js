/* eslint-disable */
import Pokemon from './Pokemon';

const Listing = ({ pokemonList, onClick }) => (
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

export default Listing;
