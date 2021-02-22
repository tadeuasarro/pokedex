import { render, screen, act } from '@testing-library/react';
import renderer from 'react-test-renderer';
import store from '../../../store/store';
import { Provider } from 'react-redux';
import Listing from '../Listing';

const handleClick = () => {
  return true;
}

const pokemon = [{ name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" }];

describe('Rendering component', () => {
  it('creates an App component', () => {
    act(() => {
      render(
        <Provider store={store}>
          <Listing pokemonList={pokemon} onClick={handleClick}/>
        </Provider>
      );
    })
    const element = screen.getByText('ivysaur');
  })
})

describe('Display', () => {
  it('renders correctly', () => {
    const comp = renderer.create(
      <Provider store={store}>
        <Listing pokemonList={pokemon} onClick={handleClick}/>
      </Provider>).toJSON();
    expect(comp).toMatchSnapshot();
  })
})

