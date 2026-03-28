function Child({ theme }) {
  return (
    <div className={theme}>
      <h2>This is {theme} mode</h2>
    </div>
  );
}

export default Child;