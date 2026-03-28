function ProductGrid() {
  const products = [
    { id: 1, name: "Laptop", price: 999, img: "https://via.placeholder.com/100" },
    { id: 2, name: "Phone", price: 499, img: "https://via.placeholder.com/100" },
    { id: 3, name: "Tablet", price: 299, img: "https://via.placeholder.com/100" },
    { id: 4, name: "Headphones", price: 150, img: "https://via.placeholder.com/100" },
    { id: 5, name: "Camera", price: 799, img: "https://via.placeholder.com/100" },
    { id: 6, name: "Smartwatch", price: 199, img: "https://via.placeholder.com/100" }
  ];

  const handleCart = (product) => {
    console.log("Added to cart:", product);
  };

  return (
    <div className="card-container">
      {products.map(product => (
        <div key={product.id} className="card">
          <img src={product.img} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => handleCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;