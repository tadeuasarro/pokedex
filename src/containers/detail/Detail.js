import './detail.css';

const Detail = () => (
  <div className="pokemon-detail-outer-container">
    <div className="pokemon-detail-container">
      <button type="button" className="reset-button">Home</button>
      <button type="button" className="next-button">Next</button>
      <button type="button" className="previous-button">Previous</button>
      <div className="pokemon-detail-info">
        <p className="detail-info">
          #
          001
          &ensp;
          {'name'.toUpperCase()}
        </p>
        <p className="detail-info">
          {
            [].map(type => (
              <span key={type.type.name}>
                {type.type.name.toUpperCase()}
                &ensp;
              </span>
            ))
          }
        </p>
        <p className="detail-info">
          Height
          &ensp;
          {100 / 10}
          &ensp;
          m
        </p>
        <p>
          Weight
          &ensp;
          {1000 / 10}
          &ensp;
          kg
        </p>
      </div>
      <div>
        <div className="pokemon-sprite" style={{ backgroundImage: `url(${'sprite'})` }}> </div>
      </div>
    </div>
  </div>
);

export default Detail;
