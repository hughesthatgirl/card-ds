import './index.css';
import { ProductList } from './components';
import { products } from './data/products';

export function App() {
  return (
    <main>
      <h1>Card DS</h1>
      <ProductList products={products} />
    </main>
  );
}
