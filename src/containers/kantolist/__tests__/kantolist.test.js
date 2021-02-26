import { render, screen, act } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../store/store';
import KantoList from '../KantoList';

describe('Rendering component', () => {
  it('creates an App component', () => {
    act(() => {
      render(
        <Provider store={store}>
          <KantoList />
        </Provider>,
      );
    });
    // eslint-disable-next-line
    const element = screen.getByText('Loading...');
  });
});

describe('Display', () => {
  it('renders correctly', () => {
    const comp = renderer.create(
      <Provider store={store}>
        <KantoList />
      </Provider>,
    ).toJSON();
    expect(comp).toMatchSnapshot();
  });
});
