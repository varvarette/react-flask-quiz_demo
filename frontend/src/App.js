import React, { useEffect, useState } from 'react';

function App() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    fetch('http://localhost:5000/api/questions')
      .then(res => res.json())
      .then(data => setQuestions(data));
  }, []);

  const handleChange = (questionIndex, value) => {
    setAnswers({ ...answers, ['q' + questionIndex]: value });
  };

  const handleSubmit = () => {
    fetch('http://localhost:5000/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(answers)
    }).then(() => alert('Answers submitted! Thank you.'));
  };

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Quiz</h1>
      <form>
        {questions.map((q, idx) => (
          <div key={idx} style={{ marginBottom: '20px' }}>
            <p>{q.question}</p>
            {q.choices.map((c, cidx) => (
              <label key={cidx}>
                <input
                  type="radio"
                  name={`q${idx}`}
                  value={c}
                  onChange={() => handleChange(idx, c)}
                />{' '}
                {c}
              </label>
            ))}
          </div>
        ))}
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
