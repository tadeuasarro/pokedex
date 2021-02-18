import { useSelector } from 'react-redux';
import Pokemon from '../components/Pokemon';

const KantoList = () => {
  const counter = useSelector(state => state).pokemon.results;

  return (
    <div>
      {
        counter.map(pokemon => (
          <Pokemon key={pokemon.name} pokemon={pokemon} />
        ))
      }
    </div>
  );
};

export default KantoList;
