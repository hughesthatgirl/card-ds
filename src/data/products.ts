import type { CardProps } from '../components/Card';

export const products = [
  {
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Minimal wristwatch on a pale background',
    title: 'Everyday Watch',
    price: '$129',
    description: 'A simple analog watch with a clean face and comfortable leather strap.',
    link: '/products/everyday-watch',
  },
  {
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Bright red running shoes on an orange background',
    title: 'Tempo Runner',
    price: '$98',
    description: 'Lightweight running shoes built for short training sessions and weekend miles.',
    link: '/products/tempo-runner',
  },
  {
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Black over-ear headphones on a yellow background',
    title: 'Studio Headphones',
    price: '$214',
    description: 'Wireless headphones with balanced audio and cushioned over-ear comfort.',
    link: '/products/studio-headphones',
  },
  {
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Smart watch showing app icons on its screen',
    title: 'Track Smartwatch',
    price: '$179',
    description: 'A compact smartwatch for workouts, notifications, and everyday activity tracking.',
    link: '/products/track-smartwatch',
  },
] satisfies CardProps[];

