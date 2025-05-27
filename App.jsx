import { useState } from "react";
import WordDetails from "./WordDetails";
import Quiz from "./Quiz";

const words = [
  {
    word: "articulate",
    definition: "Express clearly and effectively",
    example: "She was able to articulate her thoughts well in the interview.",
  },
  {
    word: "benevolent",
    definition: "Well-meaning and kindly",
    example: "The benevolent teacher always helped struggling students.",
  },
];

function App() {
  const [selectedWord, setSelectedWord] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-4">🧠 Daily Vocabulary</h1>
      {showQuiz ? (
        <Quiz onBack={() => setShowQuiz(false)} />
      ) : selectedWord ? (
        <WordDetails word={selectedWord} onBack={() => setSelectedWord(null)} />
      ) : (
        <>
          <ul className="space-y-4">
            {words.map((item, idx) => (
              <li
                key={idx}
                className="bg-white p-4 rounded-lg shadow cursor-pointer hover:bg-gray-100"
                onClick={() => setSelectedWord(item)}
              >
                <p className="text-xl font-semibold">{item.word}</p>
                <p className="text-sm text-gray-600">{item.definition}</p>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setShowQuiz(true)}
            className="mt-6 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            🧠 Take Quiz
          </button>
        </>
      )}
    </div>
  );
}

export default App;
