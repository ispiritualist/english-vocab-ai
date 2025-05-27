function WordDetails({ word, onBack }) {
  const playTTS = () => {
    const utterance = new SpeechSynthesisUtterance(word.word);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
  };

  const handleSpeak = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const spoken = event.results[0][0].transcript.toLowerCase();
      const target = word.word.toLowerCase();
      if (spoken === target) {
        alert("✅ Great! You pronounced it correctly.");
      } else {
        alert(`❌ You said: "${spoken}". Try again!`);
      }
    };

    recognition.onerror = (e) => alert("Error: " + e.error);
    recognition.start();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <button onClick={onBack} className="text-blue-600 mb-4">← Back</button>
      <h2 className="text-2xl font-bold mb-2">{word.word}</h2>
      <p className="text-gray-700 mb-2">{word.definition}</p>
      <p className="italic text-gray-500 mb-4">Example: {word.example}</p>
      <button
        onClick={playTTS}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        🔊 Speak Word
      </button>
      <button
        onClick={handleSpeak}
        className="ml-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        🎤 Try Speaking
      </button>
    </div>
  );
}

export default WordDetails;
