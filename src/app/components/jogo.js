import { useState, useEffect } from 'react';

const getRandomNumber = () => Math.floor(Math.random() * 5) + 1;

export default function Home() {
  const [currentNumber, setCurrentNumber] = useState(getRandomNumber());
  const [userInput, setUserInput] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [result, setResult] = useState('');
  const [finalResult, setFinalResult] = useState('');

  const generateChallenge = () => {
    setCurrentNumber(getRandomNumber());
    setUserInput('');
    setAttempts(0);
    setCorrectAnswers(0);
    setResult('');
    setFinalResult('');
  };

  const handleCheck = () => {
    if (parseInt(userInput) === currentNumber) {
      setResult('Parabéns! Você acertou!');
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setResult(`Tente novamente!`);
    }

    // Incrementar tentativas
    setAttempts(attempts + 1);

    // Gerar novo número para a próxima tentativa ou finalizar o jogo
    if (attempts < 4) {
      setCurrentNumber(getRandomNumber());
      setUserInput('');
    } else {
      setFinalResult(`Você acertou ${correctAnswers + (parseInt(userInput) === currentNumber ? 1 : 0)} de 5 tentativas.`);
    }
  };

  useEffect(() => {
    generateChallenge();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-black">Jogo de Correspondência!</h1>
      <p className="mb-4 text-black">Quantas estrelas você está vendo?</p>
      <div className="flex mb-4">
        {Array.from({ length: currentNumber }, (_, index) => (
          <div key={index} className="w-10 h-10 bg-yellow-300 mx-1 clip-path-star"></div>
        ))}
      </div>
      <input
        type="number"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className="border rounded p-2 mb-4 text-black"
        placeholder="Quantas estrelas?"
        disabled={attempts >= 5} // Desabilitar input após 5 tentativas
      />
      <button
        onClick={handleCheck}
        className="bg-blue-500 text-white py-2 px-4 rounded"
        disabled={attempts >= 5} // Desabilitar o botão após 5 tentativas
      >
        Verificar
      </button>
      <p className="mt-4 text-black">Tentativa {attempts} de 5</p> {/* Mostrar número da tentativa */}
      {result && <div className="mt-4 text-lg text-black">{result}</div>}
      {finalResult && <div className="mt-4 text-lg font-bold text-black">{finalResult}</div>}
    </div>
  );
}