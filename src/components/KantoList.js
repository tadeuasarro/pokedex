/* eslint-disable */
import { useSelector } from 'react-redux';

const KantoList = () => {
  const counter = useSelector(state => state).pokemon.results;

  return(
    <div>
      {
        counter.map(pokemon => {
          return(
            <div key={pokemon.name}>{pokemon.name}</div>
          );
        })
      }
    </div>
  )


};

export default KantoList;
