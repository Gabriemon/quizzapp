"use client";
import React, { useState, useEffect } from "react";
import ConfettiGenerator from "confetti-js";
import ResultOito from "./resultoito";

export default function QuizzCinco({ setCurrentPage, currentState, setCurrentState }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [isQuizFinished, setIsQuizFinished] = useState(false);

    // Perguntas mais desafiadoras para crianças de 8-10 anos
    const questions = [
        { question: "Quanto é 7 × 3?", options: [21, 20, 22, 24], answer: 21 },
        { question: "Qual é a metade de 18?", options: [6, 8, 9, 12], answer: 9 },
        { question: "Se eu tenho 24 balas e divido igualmente entre 6 amigos, quantas balas cada um vai receber?", options: [4, 5, 6, 7], answer: 4 },
        { question: "Qual número vem antes de 50?", options: [48, 49, 51, 47], answer: 49 },
        { question: "Quanto é 16 ÷ 4?", options: [2, 3, 4, 5], answer: 4 },
        { question: "Se eu tenho 10 reais e compro 3 balas de 2 reais, quanto me sobra?", options: [2, 4, 6, 1], answer: 4 },
        { question: "Quanto é 9 + 8 + 7?", options: [22, 23, 24, 25], answer: 24 },
        { question: "Qual é o próximo número da sequência: 10, 20, 30, ...?", options: [35, 40, 45, 50], answer: 40 },
        { question: "Se um número é divisível por 2 e por 3, ele também é divisível por?", options: [5, 6, 7, 9], answer: 6 },
        { question: "Qual fração representa metade de um bolo?", options: ["1/2", "1/3", "1/4", "2/3"], answer: "1/2" },
    ];

    const handleAnswerClick = (option) => {
        if (option === questions[currentQuestion].answer) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setIsQuizFinished(true);
        }
    };

    useEffect(() => {
        if (isQuizFinished && score === questions.length) {
            const confettiSettings = { target: 'my-canvas' };
            const confetti = new ConfettiGenerator(confettiSettings);
            confetti.render();

            // Limpa o efeito de confete quando o componente for desmontado
            return () => confetti.clear();
        }
    }, [isQuizFinished, score]);  // Removido questions.length da dependência

    const ResultOito = () => {
        const newState = [...currentState, score];
        setCurrentState(newState);
        setCurrentPage("ResultOito");
    };

    const Sair = () => {
        setCurrentPage("Inicial");
    };

    return (
        <>
            {isQuizFinished ? (
                <div className="bg-cover bg-fundo">
                <div className="flex items-center justify-center min-h-screen p-4 relative">
                    <canvas id="my-canvas" className="absolute inset-0"></canvas>
                    <div className="flex items-center justify-center w-full max-w-4xl h-96 bg-customgreen rounded-lg shadow-lg p-6 text-center">
                        <div>
                            <div className="text-3xl font-bold text-black mb-4">
                                {score === questions.length ? "Parabéns! Você acertou todas as perguntas! 🎉" : "Quiz finalizado!"}
                            </div>
                            <div className="text-xl text-black mb-6">
                                Você acertou {score} de {questions.length} perguntas.
                            </div>
                            
                        </div>
                    </div>
                </div></div>
            ) : (
                <div className="bg-cover bg-fundo">
                <div className="flex items-center justify-center min-h-screen  p-4">
                    <div className="w-2/3 bg-customgreen rounded-lg shadow-lg p-6">
                        <div className="text-center text-2xl text-black font-bold mb-6">
                            Pergunta {currentQuestion + 1}/{questions.length}
                        </div>
                        <div className="text-center text-black mb-6">
                            {questions[currentQuestion].question}
                        </div>
                        <div className="grid grid-cols-2 text-black gap-4">
                            {questions[currentQuestion].options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAnswerClick(option)}
                                    className="bg-customyellow font-bold py-4 rounded text-black text-xl"
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                </div></div>
            )}
    
            <div className="absolute bottom-4 right-4">
            <button
                    onClick={ResultOito}
                    className={`bg-custompink text-white font-bold py-2 px-4 rounded-lg text-lg transition duration-300 ${
                        isQuizFinished ? "hover:bg-custompink" : "opacity-50 cursor-not-allowed"
                    }`}
                    disabled={!isQuizFinished} // Desabilita o botão enquanto o quiz não termina
                >
                    Continuar
                </button>
            </div>
        </>
    );
}
