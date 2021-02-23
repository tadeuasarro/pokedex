import { render, screen, act } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../store/store';
import Filtered from '../Filtered';

const detail = {
  id: 1,
  height: 10,
  weight: 100,
  name: 'string',
  sprite: 'https://somestring.com',
  types: [
    {
      type: {
        name: 'grass',
      },
    },
  ],
};

describe('Rendering component', () => {
  it('creates an App component', () => {
    act(() => {
      render(
        <Provider store={store}>
          <Filtered />
        </Provider>,
      );
    });
    const element = screen.getByText('All pokemon');
  });
});

describe('Display', () => {
  it('renders correctly', () => {
    const comp = renderer.create(
      <Provider store={store}>
        <Filtered />
      </Provider>,
    ).toJSON();
    expect(comp).toMatchSnapshot();
  });
});
