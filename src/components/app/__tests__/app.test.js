import { render, screen, act } from '@testing-library/react';
import renderer from 'react-test-renderer';
import store from '../../../store/store';
import { Provider } from 'react-redux';
import App from '../App';

describe('Rendering component', () => {
  it('creates an App component', () => {
    act(() => {
      render(<Provider store={store}><App /></Provider>);
    })
    const element = screen.getByText('Filter');
  })
})

describe('Display', () => {
  it('renders correctly', () => {
    const comp = renderer.create(<Provider store={store}><App /></Provider>).toJSON();
    expect(comp).toMatchSnapshot();
  })
})

