function Cart({ cart, removeFromCart, updateQty }) {
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  if (cart.length === 0) return <h3>Cart is empty</h3>;

  return (
    <div>
      <h3>Your Cart</h3>
      {cart.map(item => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <span>{item.name} - ${item.price} x </span>
          <input 
            type="number" 
            value={item.qty} 
            onChange={(e) => updateQty(item.id, parseInt(e.target.value))}
            style={{ width: "50px" }}
          />
          <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: "10px" }}>Remove</button>
        </div>
      ))}
      <h4>Total: ${total}</h4>
    </div>
  );
}

export default Cart;