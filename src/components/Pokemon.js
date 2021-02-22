import PropTypes from 'prop-types';
import './pokemon.css';

const Pokemon = ({ pokemon, onClick }) => {
  const { name, url } = (pokemon);
  const id = (url.slice(34)).replace('/', '');
  let idStr = '';

  if (id.length === 1) {
    idStr = `00${id}`;
  } else if (id.length === 2) {
    idStr = `0${id}`;
  } else {
    idStr = id;
  }

  return (
    <button type="button" onClick={() => onClick(id)} className="pokemon-container">
      <span>
        #
        {idStr}
      </span>
      <span>{name}</span>
    </button>
  );
};

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};

Pokemon.defaultProps = {
  pokemon: {},
};

export default Pokemon;
