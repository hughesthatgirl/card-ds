import { render, screen } from '@testing-library/react';
import { Card } from './Card';

const cardProps = {
  image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
  imageAlt: 'Minimal wristwatch on a pale background',
  title: 'Everyday Watch',
  price: '$129',
  description: 'A simple analog watch for daily wear.',
  link: '/products/everyday-watch',
};

describe('Card', () => {
  it('renders product content with semantic image and link markup', () => {
    render(<Card {...cardProps} />);

    expect(screen.getByRole('img', { name: cardProps.imageAlt })).toHaveAttribute(
      'src',
      cardProps.image,
    );
    expect(screen.getByRole('heading', { name: cardProps.title, level: 3 })).toBeInTheDocument();
    expect(screen.getByText(cardProps.price)).toBeInTheDocument();
    expect(screen.getByText(cardProps.description)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: cardProps.title })).toHaveAttribute(
      'href',
      cardProps.link,
    );
  });
});
