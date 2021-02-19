import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Pokemon from '../components/Pokemon';
import Detail from '../components/Detail';
import indexPokemon from '../api/index-pokemon';
import showPokemon from '../api/show-pokemon';
import './kanto-list.css';

const KantoList = () => {
  const { pokemon, detail } = useSelector(state => state);
  console.log({ pokemon, detail });

  const dispatch = useDispatch();

  if (!pokemon.results.length !== 0) {
    useEffect(() => dispatch(indexPokemon()), []);
  }

  useEffect(() => dispatch(showPokemon()), []);

  if (pokemon.pending) return <div>Please wait!</div>;

  if (detail.results) return <Detail />;

  return (
    <div className="pokemon-list-outer-container">
      <div className="pokemon-list-container">
        {
          pokemon.results.map(pokemon => (
            <Pokemon className="pokemon-container" key={pokemon.name} pokemon={pokemon} />
          ))
        }
      </div>
    </div>
  );
};

export default KantoList;
