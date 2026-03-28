import { useState } from 'react';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';

function App() {
  const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Phone", price: 599 },
    { id: 3, name: "Headphones", price: 199 },
  ];

  const [cart, setCart] = useState([]);

  // Add to cart
  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // Remove from cart
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Update quantity
  const updateQty = (id, qty) => {
    if (qty < 1) return;
    setCart(cart.map(item => item.id === id ? { ...item, qty } : item));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Shopping Cart</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "30px" }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      <Cart cart={cart} removeFromCart={removeFromCart} updateQty={updateQty} />
    </div>
  );
}

export default App;