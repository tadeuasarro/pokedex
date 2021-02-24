import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { resetDetail } from '../../actions/index';
import Filtered from '../filtered/Filtered';
import Navbar from '../../components/navbar/Navbar';
import Listing from '../../components/listing/Listing';
import Loading from '../../components/loading/Loading';
import indexPokemon from '../../api/index-pokemon';
import './kanto-list.css';

const KantoList = () => {
  const { pokemon, filter, detail } = useSelector(state => state);

  const dispatch = useDispatch();

  if (!pokemon.results.length !== 0) {
    useEffect(() => dispatch(indexPokemon()), []);
  }

  if (detail.results) {
    dispatch(resetDetail());
  }

  if (pokemon.pending || filter.pending) return <Loading />;

  if (filter.results) {
    return (
      <div>
        <Navbar />
        <Filtered />
        <Listing pokemonList={filter.results} filter />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Filtered />
      <Listing pokemonList={pokemon.results} />
    </div>
  );
};

export default KantoList;
