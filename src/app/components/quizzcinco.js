"use client";
import React, { useState, useEffect } from "react";
import ConfettiGenerator from "confetti-js";

export default function QuizzCinco({ setCurrentPage, currentState, setCurrentState }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [isQuizFinished, setIsQuizFinished] = useState(false);
    const questions = [
        { question: "Quanto é 1 + 1?", options: [1, 2, 3, 4], answer: 2 },
        { question: "Quanto é 5 - 1?", options: [1, 2, 3, 4], answer: 4 },
        { question: "Qual número vem depois de 4?", options: [3, 4, 5, 6], answer: 5 },
        { question: "Quanto é 5 + 4?", options: [3, 7, 9, 6], answer: 9 },
        { question: "Quanto é 10 - 9?", options: [0, 1, 3, 5], answer: 1 },
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

    const ResultCinco = () => {
        const newState = [...currentState, score];
        setCurrentState(newState);
        setCurrentPage("ResultCinco");
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
                <button onClick={ResultCinco} className="bg-custompink text-white font-bold py-2 px-4 rounded-lg text-lg hover:bg-custompink transition duration-300">
                    Continuar
                </button>
            </div>
        </>
    );
}
