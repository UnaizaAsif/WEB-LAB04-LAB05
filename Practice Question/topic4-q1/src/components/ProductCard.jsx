import './ProductCard.css';

function ProductCard({ title, price, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>Price: ${price}</p>
    </div>
  );
}

export default ProductCard;