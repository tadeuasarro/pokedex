import PropTypes from 'prop-types';
import './pokemon.css';

const Pokemon = ({ pokemon }) => {
  const { name, url } = (pokemon);
  const id = (url.slice(34)).slice(0, 1);
  return (
    <div className="pokemon-container">
      <span>{id}</span>
      <span>{name}</span>
    </div>
  );
};

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

Pokemon.defaultProps = {
  pokemon: {},
};

export default Pokemon;
