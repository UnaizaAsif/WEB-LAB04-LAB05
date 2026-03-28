import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  // 🔥 Cart state (LIFTED)
  const [cart, setCart] = useState([]);

  return (
    <div>
      {/* Navbar */}
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/products"> Products</Link> | 
        <Link to="/cart"> Cart ({cart.length})</Link> | 
        <Link to="/checkout"> Checkout</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/products" 
          element={<Products cart={cart} setCart={setCart} />} 
        />
        <Route 
          path="/cart" 
          element={<Cart cart={cart} />} 
        />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;