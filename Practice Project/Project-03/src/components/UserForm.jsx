import { useState } from 'react';

function UserForm() {
  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Users list
  const [users, setUsers] = useState([]);

  // Add user
  const addUser = (e) => {
    e.preventDefault();

    if (name === '' || email === '') return;

    const newUser = {
      id: Date.now(),
      name: name,
      email: email
    };

    setUsers([...users, newUser]);

    // clear input
    setName('');
    setEmail('');
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>User Registration</h2>

      {/* Form */}
      <form onSubmit={addUser}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <button type="submit">Add User</button>
      </form>

      {/* Cards */}
      <div style={{ marginTop: "30px", display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
        {users.map(user => (
          <div 
            key={user.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              width: "200px",
              borderRadius: "10px"
            }}
          >
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserForm;