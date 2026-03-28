
function WelcomeMessage() {
  const now = new Date();
  return (
    <p>Current date and time: {now.toLocaleString()}</p>
  );
}

export default WelcomeMessage;