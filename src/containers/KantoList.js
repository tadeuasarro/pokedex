import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Detail from './Detail';
import Listing from '../components/Listing';
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

  if (pokemon.pending) return <div>Loading...</div>;

  if (detail.results) return <Detail detail={detail.results} />;

  return <Listing pokemonList={pokemon.results} onClick={handleClick} />;
};

export default KantoList;
