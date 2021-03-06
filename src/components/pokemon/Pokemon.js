import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './pokemon.css';

const capitalize = myStr => (myStr.charAt(0).toUpperCase() + myStr.slice(1));

const Pokemon = ({ pokemon }) => {
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
    <Link to={`/detail/?id=${id}`} className="pokemon-container">
      <span>
        #
        {idStr}
      </span>
      <span>{capitalize(name)}</span>
    </Link>
  );
};

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Pokemon;
