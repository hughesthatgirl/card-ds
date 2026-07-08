import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
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

