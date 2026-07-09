# card-ds

`card-ds` is a small React design-system package for product-card experiences. It provides reusable product presentation components, token-based styling, and Storybook documentation for implementation guidance.

The current package includes:

- `Card` for a single product summary
- `ProductList` for responsive groups of product cards
- CSS custom properties generated from design tokens
- Component documentation and examples in Storybook

## Using the Package

Import the components you need from `card-ds`, then import the package stylesheet once in your app entry point or route-level bundle.

```tsx
import { Card, ProductList } from 'card-ds';
import type { CardProps } from 'card-ds';
import 'card-ds/styles.css';
```

`react` and `react-dom` are peer dependencies. This project currently targets React 19.

## Card

Use `Card` to present a single product with an image, title, price, short description, and link.

```tsx
import { Card } from 'card-ds';
import 'card-ds/styles.css';

export function ProductCardExample() {
  return (
    <Card
      image="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
      imageAlt="Minimal wristwatch on a pale background"
      title="Everyday Watch"
      price="$129"
      description="A simple analog watch with a clean face and comfortable leather strap."
      link="/products/everyday-watch"
    />
  );
}
```

## ProductList

Use `ProductList` when rendering a related set of product cards with consistent spacing, list semantics, and responsive grid behavior.

```tsx
import { ProductList } from 'card-ds';
import type { CardProps } from 'card-ds';
import 'card-ds/styles.css';

const products = [
  {
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
    imageAlt: 'Minimal wristwatch on a pale background',
    title: 'Everyday Watch',
    price: '$129',
    description: 'A simple analog watch with a clean face and comfortable leather strap.',
    link: '/products/everyday-watch',
  },
  {
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    imageAlt: 'Bright red running shoes on an orange background',
    title: 'Tempo Runner',
    price: '$98',
    description: 'Lightweight running shoes built for short training sessions and weekend miles.',
    link: '/products/tempo-runner',
  },
] satisfies CardProps[];

export function FeaturedProducts() {
  return <ProductList products={products} heading="Featured Products" />;
}
```

## Public API

- `Card`
- `ProductList`
- `CardProps`
- `ProductListProps`
- `card-ds/styles.css`

## Design Tokens and Styling

Design tokens live in `tokens/theme.json`. Style Dictionary generates CSS custom properties from those tokens, and the components consume those variables in their styles.

Import `card-ds/styles.css` to include both the generated token variables and the component styles. The package stylesheet is the supported styling entry point for consumers.

## Accessibility

The components use semantic HTML and native browser behavior:

- `Card` renders an `article`.
- The product title is a heading and native anchor.
- The card uses a visible token-based focus style.
- `ProductList` renders a labelled `section`.
- Product collections use `ul` and `li` elements for list semantics.

## Documentation

Storybook includes component guidance, props, examples, accessibility notes, and token documentation.

```bash
npm run storybook
```

## Development

Use the Node version from `.nvmrc`:

```bash
nvm use
npm install
```

Common commands:

- `npm run dev` starts the local Vite dev server.
- `npm run build` builds the component package, root demo app, and consuming demo app.
- `npm run build:lib` builds the package output in `dist`.
- `npm run storybook` starts Storybook.
- `npm run build:storybook` builds the static Storybook site.
- `npm run demo:dev` builds the package and starts the consuming demo app.
- `npm run tokens:build` generates CSS custom properties from `tokens/theme.json`.
- `npm test` runs the Jest test suite.
