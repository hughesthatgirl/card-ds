import type { Meta, StoryObj } from '@storybook/react-vite';
import { products } from '../../data/products';
import { Card } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Card presents one product with an image, title, price, description, and link. It uses design tokens through CSS custom properties and keeps the primary navigation behavior on a native anchor.',
      },
    },
  },
  argTypes: {
    image: {
      control: 'text',
      description: 'Image URL for the card media area.',
      table: { type: { summary: 'string' } },
    },
    imageAlt: {
      control: 'text',
      description: 'Accessible description for the product image.',
      table: { type: { summary: 'string' } },
    },
    title: {
      control: 'text',
      description: 'Product title. This is also the visible link text.',
      table: { type: { summary: 'string' } },
    },
    price: {
      control: 'text',
      description: 'Display-ready product price.',
      table: { type: { summary: 'string' } },
    },
    description: {
      control: 'text',
      description: 'Short product description.',
      table: { type: { summary: 'string' } },
    },
    link: {
      control: 'text',
      description: 'Navigation URL for the product.',
      table: { type: { summary: 'string' } },
    },
  },
  args: {
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Minimal wristwatch on a pale background',
    title: 'Everyday Watch',
    price: '$129',
    description: 'A simple analog watch with a clean face and comfortable leather strap.',
    link: '/products/everyday-watch',
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ProductCard: Story = {};

export const LongDescription: Story = {
  args: {
    title: 'Studio Headphones',
    price: '$214',
    description:
      'Wireless headphones with balanced audio, cushioned over-ear comfort, and enough battery life for long work sessions.',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Black over-ear headphones on a yellow background',
    link: '/products/studio-headphones',
  },
};

export const ConstrainedWidth: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '280px' }}>
        <Story />
      </div>
    ),
  ],
};

export const GridLayout: Story = {
  render: () => (
    <ul
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        gap: 'var(--spacing-lg)',
        width: '920px',
        padding: 0,
        margin: 0,
        listStyle: 'none',
      }}
    >
      {products.slice(0, 3).map((product) => (
        <li key={product.title}>
          <Card {...product} />
        </li>
      ))}
    </ul>
  ),
  parameters: {
    layout: 'centered',
  },
};
