import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../store/store';
import Pokemon from '../Pokemon';

const pokemon = { name: 'Ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' };

describe('Rendering component', () => {
  it('creates an App component', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Pokemon pokemon={pokemon} />
          </Provider>
        </BrowserRouter>
      );
    });
    // eslint-disable-next-line
    const element = screen.getByText('Ivysaur');
  });
});

describe('Display', () => {
  it('renders correctly', () => {
    const comp = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Pokemon pokemon={pokemon} />
        </Provider>
      </BrowserRouter>
    ).toJSON();
    expect(comp).toMatchSnapshot();
  });
});
