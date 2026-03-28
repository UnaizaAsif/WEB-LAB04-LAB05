import { useState } from 'react';

function ProductCatalog() {
  // Search states
  const [search, setSearch] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // Static products
  const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Tablet", price: 300 },
    { id: 4, name: "Headphones", price: 100 },
    { id: 5, name: "Mouse", price: 50 }
  ];

  // Filter logic
  const filteredProducts = products.filter(product => {
    const matchesName = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesPrice =
      maxPrice === '' || product.price <= Number(maxPrice);

    return matchesName && matchesPrice;
  });

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Product Catalog</h2>

      {/* Search Inputs */}
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />

      {/* Product Cards */}
      <div style={{
        marginTop: "20px",
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        flexWrap: "wrap"
      }}>
        {filteredProducts.map(product => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              width: "150px",
              borderRadius: "10px"
            }}
          >
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCatalog;