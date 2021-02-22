import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Detail from '../detail/Detail';
import Listing from '../../components/listing/Listing';
import indexPokemon from '../../api/index-pokemon';
import showPokemon from '../../api/show-pokemon';
import './kanto-list.css';

const KantoList = () => {
  const { pokemon, detail, filter } = useSelector(state => state);

  const dispatch = useDispatch();

  if (!pokemon.results.length !== 0) {
    useEffect(() => dispatch(indexPokemon()), []);
  }

  const handleClick = id => {
    dispatch(showPokemon(id));
  };

  if (pokemon.pending) return <div>Loading...</div>;

  if (detail.results) return <Detail detail={detail.results} />;

  if (filter.results) return <Listing pokemonList={filter.results} onClick={handleClick} filter />;

  return <Listing pokemonList={pokemon.results} onClick={handleClick} />;
};

export default KantoList;
