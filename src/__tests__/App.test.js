import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import App from '../App';

const renderApp = () => {
  const { container } = render(
    <MemoryRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>,
  );
  return container;
};

describe('Integrations tests', () => {
  test('Match Snapshot', () => {
    expect(renderApp().firstChild).toMatchSnapshot();
  });

  test('Find Elements Header and Lazy loading elements', () => {
    renderApp();
    expect(screen.getByText(/World Bank/i)).toBeInTheDocument();
    setTimeout(() => {
      expect(screen.getByText(/East/i)).toBeInTheDocument();
    }, 1000);
  });
});
