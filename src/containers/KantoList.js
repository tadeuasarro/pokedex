import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Pokemon from '../components/Pokemon';
import indexPokemon from '../api/index-pokemon';
import './kanto-list.css';

const KantoList = () => {
  const counter = useSelector(state => state).pokemon.results;
  const dispatch = useDispatch();

  useEffect(() => dispatch(indexPokemon()), []);

  return (
    <div className="pokemon-list-container">
      {
        counter.map(pokemon => (
          <Pokemon className="pokemon-container" key={pokemon.name} pokemon={pokemon} />
        ))
      }
    </div>
  );
};

export default KantoList;
