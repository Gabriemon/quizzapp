"use client";
import React, { useState, useEffect } from "react";

// Função para gerar diferentes tipos de sequência lógica
const generateSequence = () => {
  const type = Math.floor(Math.random() * 5);
  const start = Math.floor(Math.random() * 10) + 1;
  const step = Math.floor(Math.random() * 5) + 2;

  switch (type) {
    case 0:
      return Array.from({ length: 4 }, (_, i) => start + i * step);
    case 1:
      return Array.from({ length: 4 }, (_, i) => start * Math.pow(step, i));
    case 2:
      return Array.from({ length: 4 }, (_, i) => (i % 2 === 0 ? start + i * step : start - i * step));
    case 3:
      return Array.from({ length: 4 }, (_, i) => start * Math.pow(2, i));
    case 4:
      const seq = [start, start + step];
      while (seq.length < 4) seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
      return seq;
    default:
      return [];
  }
};

// Função para calcular o próximo número da sequência
const getNextInSequence = (sequence) => {
  const difference = sequence[1] - sequence[0];
  const ratio = sequence[1] / sequence[0];

  if (difference === 0) return sequence[sequence.length - 1]; // Se todos os números forem iguais
  if (sequence[1] - sequence[0] === difference) {
    return sequence[sequence.length - 1] + difference; // Progressão aritmética
  } else if (sequence[1] / sequence[0] === ratio) {
    return sequence[sequence.length - 1] * ratio; // Progressão geométrica
  } else if (sequence[0] * 2 === sequence[1]) {
    return sequence[sequence.length - 1] * 2; // Múltiplos (x2)
  } else {
    return sequence[sequence.length - 1] + sequence[sequence.length - 2]; // Soma dos dois anteriores
  }
};

export default function GameOnze({ setCurrentPage, currentState, setCurrentState }) {
  const [sequence, setSequence] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [correctAttempts, setCorrectAttempts] = useState(0); // Contador de acertos
  const [hasCompleted, setHasCompleted] = useState(false);

  // Reinicia o jogo com nova sequência
  const resetGame = () => {
    const newSequence = generateSequence();
    setSequence(newSequence);
    setUserInput("");
    setResult("");
    setHasCompleted(false);
  };

  useEffect(() => {
    resetGame();
  }, []);

  // Verifica a resposta do usuário
  const handleCheck = () => {
    const correctAnswer = getNextInSequence(sequence);
    const newAttempts = attempts + 1;

    // Marca como concluído na 5ª tentativa
    if (newAttempts === 5) {
      setHasCompleted(true);
    } else {
      setAttempts(newAttempts); // Incrementa as tentativas
    }

    if (parseInt(userInput) === correctAnswer) {
      setResult("Parabéns! Você acertou!");
      setCorrectAttempts(correctAttempts + 1); // Incrementa o contador de acertos
    } else {
      setResult("Tente novamente!");
    }

    // Gera um novo desafio após a resposta, se ainda não atingiu a última tentativa
    if (newAttempts < 5) {
      setTimeout(() => {
        resetGame(); // Reseta o jogo para o próximo desafio
      }, 1000); // Atraso de 1 segundo para a transição visual
    }

    setUserInput(""); // Limpa o campo de input após cada tentativa
  };

  // Próxima página
  const NextOnze = () => {
    const newState = [...currentState];
    setCurrentState(newState);
    setCurrentPage("NextOnze");
  };

  // Sair para a página inicial
  const Sair = () => {
    setCurrentPage("Inicial");
  };

  return (
    <>

      <div className="flex items-center justify-center text-center h-screen bg-gray-100">
        <div className="flex flex-col max-w-4xl bg-customgreen border rounded-lg  p-6 md:p-10 dark:border-gray-700">
          <h1 className="text-2xl font-bold mb-4 text-gray-700 text-center">
            Descubra o Próximo Número na Sequência!
          </h1>
          <p className="text-lg text-gray-700 mb-6 text-center">
            Qual é o próximo número na sequência: <span className="font-semibold">{sequence.join(", ")}</span>?
          </p>
          <input
            type="number"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="w-full border rounded p-2 mb-4 text-black"
            placeholder="Digite o próximo número"
            disabled={hasCompleted} // Desabilita o campo de entrada após completar
          />
          <button
            onClick={handleCheck}
            className={`w-full bg-blue-500 text-white py-2 px-4 rounded transition ${
              userInput ? "hover:bg-blue-600" : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!userInput || hasCompleted} // Desabilita o botão de verificar após completar
          >
            Verificar
          </button>
          {result && (
            <p className="mt-4 text-lg text-gray-700 text-center">{result}</p>
          )}
          <p className="mt-2 text-gray-500 text-center">
            Tentativa {Math.min(attempts + 1, 5)} de 5
          </p>
          {hasCompleted && (
            <div className="text-center mt-8">
              <p className="text-lg text-gray-700">Você acertou {correctAttempts} de 5 tentativas!</p>
              <button
                onClick={NextOnze}
                className="mt-4 bg-customyellow font-bold py-2 px-10 rounded text-black text-lg"
              >
                Continuar
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-4 right-4">
        <button
          onClick={Sair}
          className="bg-custompink text-white font-bold py-2 px-4 rounded-lg text-lg hover:bg-custompink transition duration-300"
        >
          Sair
        </button>
      </div>
    </>
  );
}
