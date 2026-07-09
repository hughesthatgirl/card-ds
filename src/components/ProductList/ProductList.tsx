import { useId } from 'react';
import type { CardProps } from '../Card';
import { Card } from '../Card';
import './ProductList.css';

export type ProductListProps = {
  products: CardProps[];
  heading?: string;
};

export function ProductList({ products, heading = 'Featured Products' }: ProductListProps) {
  const headingId = useId();

  return (
    <section className="product-list" aria-labelledby={headingId}>
      <h2 className="product-list__heading" id={headingId}>
        {heading}
      </h2>
      <ul className="product-list__items">
        {products.map((product) => (
          <li className="product-list__item" key={product.title}>
            <Card {...product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
