"use client";
import React, { useState, useEffect } from "react";
import ConfettiGenerator from "confetti-js";

export default function QuizzOnze({ setCurrentPage, currentState, setCurrentState }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [isQuizFinished, setIsQuizFinished] = useState(false);
    const questions = [
        { question: "Qual é o resultado de 12 × 8?", options: [96, 88, 84, 104], answer: 96 },
        { question: "Quanto é (25 + 15) ÷ 5?", options: [7, 8, 9, 10], answer: 8 },
        { question: "Qual é a raiz quadrada de 144?", options: [10, 11, 12, 13], answer: 12 },
        { question: "Se uma pizza é dividida em 8 partes e você come 3, qual fração representa o que você comeu?", options: ["3/8", "5/8", "3/5", "8/3"], answer: "3/8" },
        { question: "Qual é o valor de 3² + 4²?", options: [9, 12, 16, 25], answer: 25 },
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

            return () => confetti.clear(); // Limpa o efeito quando o componente é desmontado
        }
    }, [isQuizFinished, score, questions.length]);

    const ResultOnze = () => {
        const newState = [...currentState, score];
        setCurrentState(newState);
        setCurrentPage("ResultOnze");
    };

    const Sair = () => {
        setCurrentPage("Inicial");
    };

    return (
        <>
            {isQuizFinished ? (
                <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 relative">
                    <canvas id="my-canvas" className="absolute inset-0"></canvas>
                    <div className="flex items-center justify-center w-full max-w-4xl h-96 bg-customgreen border border-gray-200 rounded-lg shadow-lg p-6 text-center">
                        <div>
                            <div className="text-3xl font-bold text-black mb-4">
                                {score === questions.length ? "Parabéns! Você acertou todas as perguntas! 🎉" : "Quiz finalizado!"}
                            </div>
                            <div className="text-xl text-black mb-6">
                                Você acertou {score} de {questions.length} perguntas.
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
                    <div className="w-2/3 bg-customgreen border border-gray-200 rounded-lg shadow-lg p-6">
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
                </div>
            )}
            <div className="absolute bottom-4 right-4">
                <button
                    onClick={ResultOnze}
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
