import { useDispatch } from 'react-redux';
import indexTypes from '../api/index-types';

const Filtered = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(indexTypes());
  };

  return (
    <div>
      <form>
        <select>
          <option>All pokemon</option>
          <option value="bug">Bug</option>
          <option value="dragon">Dragon</option>
          <option value="electric">Electric</option>
          <option value="fighting">Fighting</option>
          <option value="fire">Fire</option>
          <option value="flying">Flying</option>
          <option value="ghost">Ghost</option>
          <option value="grass">Grass</option>
          <option value="ground">Ground</option>
          <option value="ice">Ice</option>
          <option value="normal">Normal</option>
          <option value="poison">Poison</option>
          <option value="psychic">Psychic</option>
          <option value="rock">Rock</option>
          <option value="water">Water</option>
        </select>
        <button onClick={() => handleClick()} type="button">Filter</button>
      </form>
    </div>
  );
};

export default Filtered;
