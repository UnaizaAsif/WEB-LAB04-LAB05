function ProductCards() {
  const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Phone", price: 499 },
    { id: 3, name: "Tablet", price: 299 },
  ];

  const handleCart = (product) => {
    console.log("Added to cart:", product);
  };

  return (
    <div className="product-grid">
      {products.map(p => (
        <div key={p.id} className="product-card">
          <h3>{p.name}</h3>
          <p>${p.price}</p>
          <button onClick={() => handleCart(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductCards;