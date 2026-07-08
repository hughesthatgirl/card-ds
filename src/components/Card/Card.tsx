import './Card.css';

export type CardProps = {
  image: string;
  imageAlt: string;
  title: string;
  price: string;
  description: string;
  link: string;
};

export function Card({ image, imageAlt, title, price, description, link }: CardProps) {
  return (
    <article className="card">
      <div className="card__media">
        <img className="card__image" src={image} alt={imageAlt} />
      </div>
      <div className="card__content">
        <h3 className="card__title">
          <a className="card__link" href={link}>
            {title}
          </a>
        </h3>
        <p className="card__price">{price}</p>
        <p className="card__description">{description}</p>
      </div>
    </article>
  );
}
