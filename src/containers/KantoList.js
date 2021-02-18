import { useSelector } from 'react-redux';
import Pokemon from '../components/Pokemon';
import './kanto-list.css';

const KantoList = () => {
  const counter = useSelector(state => state).pokemon.results;

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
