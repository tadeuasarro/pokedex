import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Pokemon from '../components/Pokemon';
import Detail from './Detail';
import indexPokemon from '../api/index-pokemon';
import showPokemon from '../api/show-pokemon';
import './kanto-list.css';

const KantoList = () => {
  const { pokemon, detail } = useSelector(state => state);

  const dispatch = useDispatch();

  if (!pokemon.results.length !== 0) {
    useEffect(() => dispatch(indexPokemon()), []);
  }

  const handleClick = id => {
    dispatch(showPokemon(id));
  };

  if (pokemon.pending) return <div>Please wait!</div>;

  if (detail.results) return <Detail detail={detail.results} />;

  return (
    <div className="pokemon-list-outer-container">
      <div className="pokemon-list-container">
        {
          pokemon.results.map(pokemon => (
            <Pokemon className="pokemon-container" onClick={handleClick} key={pokemon.name} pokemon={pokemon} />
          ))
        }
      </div>
    </div>
  );
};

export default KantoList;
