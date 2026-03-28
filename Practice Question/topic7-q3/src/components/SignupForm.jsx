import { useState } from 'react';

function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [program, setProgram] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name,
      email,
      password,
      program
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup Form</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <select value={program} onChange={(e) => setProgram(e.target.value)}>
        <option value="">Select Program</option>
        <option value="CS">Computer Science</option>
        <option value="SE">Software Engineering</option>
        <option value="AI">Artificial Intelligence</option>
      </select>

      <br /><br />

      <button type="submit">Register</button>
    </form>
  );
}

export default SignupForm;