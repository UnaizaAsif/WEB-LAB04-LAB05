function ProductCard({ product, addToCart }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", width: "150px" }}>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;