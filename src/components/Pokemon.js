import PropTypes from 'prop-types';
import './pokemon.css';

const Pokemon = ({ pokemon }) => {
  const { name, url } = (pokemon);
  let id = (url.slice(34)).replace('/', '');

  if (id.length === 1) {
    id = `00${id}`;
  } else if (id.length === 2) {
    id = `0${id}`;
  }

  return (
    <div className="pokemon-container">
      <span>
        #
        {id}
      </span>
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
