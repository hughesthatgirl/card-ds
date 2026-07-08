import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('App', () => {
  it('renders the application shell and product demo', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /card ds/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /featured products/i })).toBeInTheDocument();
  });
});
