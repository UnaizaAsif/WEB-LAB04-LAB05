function Orders() {
  const orders = [
    { id: 101, product: 'Laptop', status: 'Delivered' },
    { id: 102, product: 'Phone', status: 'Pending' },
  ];

  return (
    <div>
      <h3>Orders</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {orders.map(order => (
          <li key={order.id} style={{ marginBottom: '5px' }}>
            {order.product} - {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Orders;