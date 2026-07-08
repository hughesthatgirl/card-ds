import { render, screen, within } from '@testing-library/react';
import { ProductList } from './ProductList';
import { products } from '../../data/products';

describe('ProductList', () => {
  it('renders the sample products as a list of cards', () => {
    render(<ProductList />);

    const list = screen.getByRole('list', { name: /featured products/i });
    const items = within(list).getAllByRole('listitem');

    expect(items).toHaveLength(products.length);
    expect(products.length).toBeGreaterThanOrEqual(3);
    expect(products.length).toBeLessThanOrEqual(5);

    for (const product of products) {
      expect(
        within(list).getByRole('link', { name: product.title }),
      ).toBeInTheDocument();
    }
  });
});
