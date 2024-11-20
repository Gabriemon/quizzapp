"use client";
import React, { useState, useEffect } from "react";

// Função para gerar diferentes tipos de sequência lógica
// Função para gerar uma sequência simples
const generateSequence = () => {
  const start = Math.floor(Math.random() * 10) + 1; // Número inicial
  const step = Math.floor(Math.random() * 5) + 1; // Passo da sequência
  return Array.from({ length: 4 }, (_, i) => start + i * step); // Sequência linear
};

// Função para calcular o próximo número
const getNextInSequence = (sequence) => sequence[sequence.length - 1] + (sequence[1] - sequence[0]);

export default function SimpleGame({ setCurrentPage }) {
  const [sequence, setSequence] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [correctAttempts, setCorrectAttempts] = useState(0); // Contador de acertos
  const [hasCompleted, setHasCompleted] = useState(false);

  useEffect(() => {
    setSequence(generateSequence()); // Gera a primeira sequência ao montar o componente
  }, []);

  // Verifica a resposta do usuário
  const handleCheck = () => {
    const correctAnswer = getNextInSequence(sequence);
    setAttempts(attempts + 1);

    if (parseInt(userInput) === correctAnswer) {
      setCorrectAttempts(correctAttempts + 1);
      setResult("Parabéns! Você acertou!");
    } else {
      setResult("Tente novamente!");
    }

    // Finaliza o jogo após 5 tentativas
    if (attempts + 1 === 5) {
      setHasCompleted(true);
    } else {
      // Gera nova sequência para próxima tentativa
      setSequence(generateSequence());
    }

    setUserInput(""); // Limpa o campo de input após verificar
  };

  // Próxima página
  const NextOnze = () => {
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
