import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import showPokemon from '../../api/show-pokemon';
import Loading from '../../components/loading/Loading';
import Navbar from '../../components/navbar/Navbar';
import './detail.css';

const Detail = () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  let strId = '';

  if (id && id.length === 1) {
    strId = `00${id}`;
  } else if (id && id.length === 2) {
    strId = `0${id}`;
  }

  const { detail } = useSelector(state => state);
  const dispatch = useDispatch();

  if (detail.pending) {
    return <Loading />;
  }

  if (!detail.results) {
    dispatch(showPokemon(id));
    return <Loading />;
  }

  const {
    weight, height, name, types, sprite,
  } = detail.results;

  return (
    <div>
      <Navbar />
      <div className="pokemon-detail-outer-container">
        <div className="pokemon-detail-container">
          <Link to="/" className="reset-button"><span>Home</span></Link>
          <div className="pokemon-detail-info">
            <p className="detail-info">
              #
              {strId}
              &ensp;
              {name.toUpperCase()}
            </p>
            <p className="detail-info">
              {
                types.map(type => (
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
              {height / 10}
              &ensp;
              m
            </p>
            <p>
              Weight
              &ensp;
              {weight / 10}
              &ensp;
              kg
            </p>
          </div>
          <div>
            <div className="pokemon-sprite" style={{ backgroundImage: `url(${sprite})` }}> </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
