function Input({ setText }) {
  return (
    <input
      type="text"
      placeholder="Type something..."
      onChange={(e) => setText(e.target.value)}
    />
  );
}

export default Input;