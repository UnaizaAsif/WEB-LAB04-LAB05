function ConversionHistory({ history }) {
  if (history.length === 0) return <p>No conversions yet.</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {history.map((item, index) => (
        <li key={index} style={{ marginBottom: "5px" }}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default ConversionHistory;