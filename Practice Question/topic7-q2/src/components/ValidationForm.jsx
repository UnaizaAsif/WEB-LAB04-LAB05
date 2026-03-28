import { useState } from 'react';

function ValidationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length < 3) {
      setError('Name must be at least 3 characters');
      return;
    }

    if (!email.includes('@')) {
      setError('Invalid email format');
      return;
    }

    setError('');
    alert('Form submitted successfully');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Validation Form</h2>

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

      <button type="submit">Submit</button>

      <p style={{ color: 'red' }}>{error}</p>
    </form>
  );
}
export default ValidationForm;