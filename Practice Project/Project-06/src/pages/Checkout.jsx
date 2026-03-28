import { useState } from 'react';

function Checkout() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order Placed!");
  };

  return (
    <div>
      <h2>Checkout</h2>

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input 
          type="text" 
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <br /><br />

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;