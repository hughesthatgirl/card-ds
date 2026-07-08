import { products } from '../../data/products';
import { Card } from '../Card';
import './ProductList.css';

export function ProductList() {
  return (
    <section className="product-list" aria-labelledby="featured-products-heading">
      <h2 className="product-list__heading" id="featured-products-heading">
        Featured Products
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

