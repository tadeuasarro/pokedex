import { render, screen, act } from '@testing-library/react';
import renderer from 'react-test-renderer';
import store from '../../../store/store';
import { Provider } from 'react-redux';
import Navbar from '../Navbar';

describe('Rendering component', () => {
  it('creates an App component', () => {
    act(() => {
      render(
        <Provider store={store}>
          <Navbar />
        </Provider>
      );
    })
    const element = screen.getByAltText('Pokémon');
  })
})

describe('Display', () => {
  it('renders correctly', () => {
    const comp = renderer.create(
      <Provider store={store}>
        <Navbar />
      </Provider>).toJSON();
    expect(comp).toMatchSnapshot();
  })
})

