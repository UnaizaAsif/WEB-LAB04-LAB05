function UserCards() {
  const users = [
    { id: 1, name: "Alice", role: "Developer", img: "https://via.placeholder.com/100" },
    { id: 2, name: "Bob", role: "Designer", img: "https://via.placeholder.com/100" },
    { id: 3, name: "Charlie", role: "Manager", img: "https://via.placeholder.com/100" },
    { id: 4, name: "David", role: "Tester", img: "https://via.placeholder.com/100" },
    { id: 5, name: "Eva", role: "HR", img: "https://via.placeholder.com/100" },
    { id: 6, name: "Frank", role: "Intern", img: "https://via.placeholder.com/100" }
  ];

  return (
    <div className="card-container">
      {users.map(user => (
        <div key={user.id} className="card">
          <img src={user.img} alt={user.name} />
          <h3>{user.name}</h3>
          <p>{user.role}</p>
        </div>
      ))}
    </div>
  );
}

export default UserCards;