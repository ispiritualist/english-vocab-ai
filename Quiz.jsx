import { useState } from "react";

const quizData = [
  {
    question: "What is the meaning of 'articulate'?",
    options: [
      "To express clearly and effectively",
      "To be uncertain",
      "To draw quickly",
      "To disagree strongly"
    ],
    answer: 0,
  },
];

function Quiz({ onBack }) {
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState("");

  const handleSubmit = () => {
    if (selected === null) return;
    setResult(selected === quizData[0].answer ? "✅ Correct!" : "❌ Try again.");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <button onClick={onBack} className="text-blue-600 mb-4">← Back</button>
      <h2 className="text-xl font-bold mb-4">{quizData[0].question}</h2>
      <ul className="space-y-2">
        {quizData[0].options.map((opt, idx) => (
          <li key={idx}>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="option"
                value={idx}
                onChange={() => setSelected(idx)}
              />
              <span>{opt}</span>
            </label>
          </li>
        ))}
      </ul>
      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
      >
        Submit
      </button>
      {result && <p className="mt-4 text-lg">{result}</p>}
    </div>
  );
}

export default Quiz;
