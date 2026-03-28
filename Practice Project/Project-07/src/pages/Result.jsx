import { useLocation, useNavigate } from 'react-router-dom';

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const { score, total } = location.state || { score: 0, total: 0 };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Result</h2>
      <h3>Your Score: {score} / {total}</h3>

      <button onClick={() => navigate('/')}>
        Restart Quiz
      </button>
    </div>
  );
}

export default Result;