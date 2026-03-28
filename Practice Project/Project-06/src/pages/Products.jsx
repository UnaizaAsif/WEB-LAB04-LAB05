import ProductCard from '../components/ProductCard';

function Products({ cart, setCart }) {
  const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Tablet", price: 300 }
  ];

  return (
    <div>
      <h2>Products</h2>

      {products.map(p => (
        <ProductCard 
          key={p.id} 
          product={p} 
          cart={cart}
          setCart={setCart}
        />
      ))}
    </div>
  );
}

export default Products;