import { render, screen, within } from '@testing-library/react';
import { ProductList } from './ProductList';
import { products } from '../../data/products';

describe('ProductList', () => {
  it('renders the sample products as a list of cards', () => {
    render(<ProductList products={products} />);

    const region = screen.getByRole('region', { name: /featured products/i });
    const list = within(region).getByRole('list');
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
