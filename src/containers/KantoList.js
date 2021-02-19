import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Pokemon from '../components/Pokemon';
import Detail from '../components/Detail';
import indexPokemon from '../api/index-pokemon';
import './kanto-list.css';

const KantoList = () => {
  const { pending, results, detail } = useSelector(state => state).pokemon;
  console.log(useSelector(state => state).pokemon);
  const dispatch = useDispatch();

  useEffect(() => dispatch(indexPokemon()), []);

  if (pending) return <div>Please wait!</div>;

  if (!detail) return <Detail />;

  return (
    <div className="pokemon-list-outer-container">
      <div className="pokemon-list-container">
        {
          results.map(pokemon => (
            <Pokemon className="pokemon-container" key={pokemon.name} pokemon={pokemon} />
          ))
        }
      </div>
    </div>
  );
};

export default KantoList;
