import { render, screen, act } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../store/store';
import Filtered from '../Filtered';

describe('Rendering component', () => {
  it('creates an App component', () => {
    act(() => {
      render(
        <Provider store={store}>
          <Filtered />
        </Provider>,
      );
    });
    // eslint-disable-next-line
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
