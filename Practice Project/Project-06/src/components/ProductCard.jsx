function ProductCard({ product, cart, setCart }) {

  const addToCart = () => {
    setCart([...cart, product]);
  };

  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h3>{product.name}</h3>
      <p>${product.price}</p>

      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;