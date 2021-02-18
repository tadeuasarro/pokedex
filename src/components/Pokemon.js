import PropTypes from 'prop-types';

const Pokemon = ({ pokemon }) => {
  const { name, url } = (pokemon);
  return (
    <div>
      { `${name}, ${url}` }
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
