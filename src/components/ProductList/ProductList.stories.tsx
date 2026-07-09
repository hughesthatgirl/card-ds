import type { Meta, StoryObj } from '@storybook/react-vite';
import { products } from '../../data/products';
import { ProductList } from './ProductList';

const meta = {
  title: 'Components/ProductList',
  component: ProductList,
  parameters: {
    docs: {
      description: {
        component:
          'ProductList renders a responsive list of Card components. It is useful when a consuming app wants the standard product-card grid behavior from card-ds.',
      },
    },
  },
  argTypes: {
    heading: {
      control: 'text',
      description: 'Section heading shown above the product list.',
      table: {
        type: { summary: 'string' },
      },
    },
    products: {
      control: 'object',
      description: 'Array of product data objects passed to Card.',
      table: {
        type: { summary: 'CardProps[]' },
      },
    },
  },
  args: {
    heading: 'Featured Products',
    products: products.slice(0, 3),
  },
} satisfies Meta<typeof ProductList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ThreeCards: Story = {};

export const FourCards: Story = {
  args: {
    products,
  },
};
