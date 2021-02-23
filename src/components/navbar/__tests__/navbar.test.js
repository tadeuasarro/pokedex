import { render, screen, act } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../store/store';
import Navbar from '../Navbar';

describe('Rendering component', () => {
  it('creates an App component', () => {
    act(() => {
      render(
        <Provider store={store}>
          <Navbar />
        </Provider>,
      );
    });
    // eslint-disable-next-line
    const element = screen.getByAltText('Pokémon');
  });
});

describe('Display', () => {
  it('renders correctly', () => {
    const comp = renderer.create(
      <Provider store={store}>
        <Navbar />
      </Provider>,
    ).toJSON();
    expect(comp).toMatchSnapshot();
  });
});
