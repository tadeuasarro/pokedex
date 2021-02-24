import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Listing from '../../components/listing/Listing';
import Loading from '../../components/loading/Loading';
import indexPokemon from '../../api/index-pokemon';
import './kanto-list.css';

const KantoList = () => {
  const { pokemon, filter } = useSelector(state => state);

  const dispatch = useDispatch();

  if (!pokemon.results.length !== 0) {
    useEffect(() => dispatch(indexPokemon()), []);
  }

  if (pokemon.pending || filter.pending) return <Loading />;

  if (filter.results) return <Listing pokemonList={filter.results} filter />;

  return <Listing pokemonList={pokemon.results} />;
};

export default KantoList;
