import { render, screen, act } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../store/store';
import Detail from '../Detail';

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

describe('Display', () => {
  it('renders correctly', () => {
    const comp = renderer.create(
      <Provider store={store}>
        <Detail detail={detail} />
      </Provider>,
    ).toJSON();
    expect(comp).toMatchSnapshot();
  });
});
