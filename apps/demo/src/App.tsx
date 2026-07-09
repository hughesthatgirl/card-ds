import { ProductList } from 'card-ds';
import type { CardProps } from 'card-ds';
import 'card-ds/styles.css';
import './styles.css';

const demoProducts = [
  {
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Bright red running shoes on an orange background',
    title: 'Tempo Runner',
    price: '$98',
    description: 'Lightweight running shoes built for short training sessions and weekend miles.',
    link: '/products/tempo-runner',
  },
  {
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Black over-ear headphones on a yellow background',
    title: 'Studio Headphones',
    price: '$214',
    description: 'Wireless headphones with balanced audio and cushioned over-ear comfort.',
    link: '/products/studio-headphones',
  },
  {
    image:
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Smart watch showing app icons on its screen',
    title: 'Track Smartwatch',
    price: '$179',
    description: 'A compact smartwatch for workouts and everyday activity tracking.',
    link: '/products/track-smartwatch',
  },
] satisfies CardProps[];

export function App() {
  return (
    <>
      <main className="demo-shell">
        <header className="demo-header">
          <h1>Consuming App Demo</h1>
          <p>This app imports the Card and ProductList components from the local card-ds package.</p>
        </header>
        <ProductList products={demoProducts} heading="New Products" />
      </main>
      <footer className='demo-footer'>card-ds Consuming App Demo | SAS Role Based Activity</footer>
    </>
  );
}
