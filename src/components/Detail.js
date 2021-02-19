/* eslint-disable */
import PropTypes from 'prop-types';
import './detail.css';

const Detail = (detail) => {
  const { weight, height, id, types, sprite, name } = detail.detail;
  return (
    <div className="pokemon-detail-outer-container">
      <div className="pokemon-detail-container">
        <div className="pokemon-detail-info">
          <p className="detail-info">#{id} {name.toUpperCase()}</p>
          <p className="detail-info">
            {
              types.map(type => (<span key={type.type.name}>{type.type.name.toUpperCase()} </span>))
            }
          </p>
          <p className="detail-info">Height {height}&apos;</p>
          <p>Weight {weight} lbs</p>
        </div>
        <div>
          <img src={sprite} alt={sprite} />
        </div>
      </div>
    </div>
  );
}

Detail.propTypes = {
  detail: PropTypes.shape({
    weight: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    types: PropTypes.array.isRequired,
    sprite: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })
}

export default Detail;
