import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Quiz() {
  const navigate = useNavigate();

  const questions = [
    {
      question: "Capital of Pakistan?",
      options: ["Karachi", "Lahore", "Islamabad", "Quetta"],
      answer: "Islamabad"
    },
    {
      question: "2 + 2 = ?",
      options: ["3", "4", "5", "6"],
      answer: "4"
    },
    {
      question: "React is a?",
      options: ["Library", "Language", "Database", "OS"],
      answer: "Library"
    },
    {
      question: "HTML stands for?",
      options: ["Hyper Text Markup Language", "High Text", "Hyper Tool", "None"],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "CSS used for?",
      options: ["Styling", "Logic", "Database", "Backend"],
      answer: "Styling"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  // select answer
  const selectOption = (option) => {
    const updated = [...answers];
    updated[current] = option;
    setAnswers(updated);
  };

  // next question
  const next = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      // calculate score
      let score = 0;
      answers.forEach((ans, i) => {
        if (ans === questions[i].answer) score++;
      });

      navigate('/result', { state: { score, total: questions.length } });
    }
  };

  // previous question
  const prev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Quiz App</h2>

      <h3>{questions[current].question}</h3>

      {questions[current].options.map((opt, index) => (
        <div key={index}>
          <button
            onClick={() => selectOption(opt)}
            style={{
              margin: "5px",
              background: answers[current] === opt ? "lightblue" : "white"
            }}
          >
            {opt}
          </button>
        </div>
      ))}

      <br />

      <button onClick={prev} disabled={current === 0}>Previous</button>
      <button onClick={next}>
        {current === questions.length - 1 ? "Finish" : "Next"}
      </button>
    </div>
  );
}

export default Quiz;