import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { resetDetail } from '../../actions/index';
import showPokemon from '../../api/show-pokemon';
import './detail.css';

const Detail = detail => {
  const {
    weight, height, id, types, sprite, name,
  } = detail.detail;
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetDetail());
  };

  const handleNext = () => {
    dispatch(showPokemon(id + 1));
  };

  const handlePrevious = () => {
    dispatch(showPokemon(id - 1));
  };

  return (
    <div className="pokemon-detail-outer-container">
      <div className="pokemon-detail-container">
        <button type="button" onClick={handleReset} className="reset-button">Home</button>
        <button type="button" onClick={handleNext} className="next-button">Next</button>
        <button type="button" onClick={handlePrevious} className="previous-button">Previous</button>
        <div className="pokemon-detail-info">
          <p className="detail-info">
            #
            {id}
            {name.toUpperCase()}
          </p>
          <p className="detail-info">
            {
              types.map(type => (
                <span key={type.type.name}>
                  {type.type.name.toUpperCase()}
                </span>
              ))
            }
          </p>
          <p className="detail-info">
            Height
            {height / 10}
            m
          </p>
          <p>
            Weight
            {weight / 10}
            kg
          </p>
        </div>
        <div>
          <div className="pokemon-sprite" style={{ backgroundImage: `url(${sprite})` }}> </div>
        </div>
      </div>
    </div>
  );
};

Detail.propTypes = {
  detail: PropTypes.shape({
    weight: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    types: PropTypes.instanceOf(Array),
    sprite: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

Detail.defaultProps = {
  detail: {},
};

export default Detail;
