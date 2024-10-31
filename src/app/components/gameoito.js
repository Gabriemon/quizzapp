"use client"
import React, { useState } from 'react';

export default function GameOito({ setCurrentPage, currentState, setCurrentState }) {

    const NextOito = () => {
        const newState = [...currentState];
        setCurrentState(newState);
        setCurrentPage('NextOito');
    };

    const Sair = () => {
        setCurrentPage('Inicial');
    };

    const questions = [
        {
            text: 'Quantos centímetros há em 1 metro?',
            options: [
                { text: '100 cm', isCorrect: true },
                { text: '1000 cm', isCorrect: false },
                { text: '10 cm', isCorrect: false },
            ],
        },
        {
            text: 'Quantos mililitros há em 1 litro?',
            options: [
                { text: '100 ml', isCorrect: false },
                { text: '1000 ml', isCorrect: true },
                { text: '10 ml', isCorrect: false },
            ],
        },
        {
            text: 'Quantas gramas há em 1 quilo?',
            options: [
                { text: '500 g', isCorrect: false },
                { text: '1000 g', isCorrect: true },
                { text: '100 g', isCorrect: false },
            ],
        },
        {
            text: 'Quantos metros há em 1 quilômetro?',
            options: [
                { text: '100 m', isCorrect: false },
                { text: '1000 m', isCorrect: true },
                { text: '10 m', isCorrect: false },
            ],
        },
        
        // Adicione mais perguntas aqui
    ];

    const [position, setPosition] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isGameFinished, setIsGameFinished] = useState(false); // Estado para verificar se o jogo acabou

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setPosition((prev) => {
                const newPosition = Math.min(prev + 20, 100); // Aumenta a posição
                if (newPosition === 100) {
                    setIsGameFinished(true); // Finaliza o jogo se a posição for 100%
                }
                return newPosition;
            });
        }
        setCurrentQuestionIndex((prev) => (prev + 1) % questions.length); // Avança para a próxima pergunta
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="size-4/6 bg-customgreen border border-gray-200 rounded-lg shadow dark:border-gray-700 p-6">
                <div style={{ textAlign: 'center', padding: '20px' }}>
                    <h1 style={{ color: 'black' }}>Corrida de Medidas</h1>
                    <div style={{ position: 'relative', height: '200px', border: '1px solid black', margin: '20px' }}>
                        <div style={{ position: 'absolute', left: `${position}%`, bottom: '20px' }}>
                            <h3 style={{ color: 'black' }}>Jogador</h3>
                            <div style={{ width: '30px', height: '30px', backgroundColor: 'blue' }} />
                        </div>
                    </div>
                    <h2 style={{ color: 'black' }}>{questions[currentQuestionIndex].text}</h2>
                    {questions[currentQuestionIndex].options.map((option, index) => (
                        <button key={index} onClick={() => handleAnswer(option.isCorrect)} style={{ margin: '5px' , color: 'black'}}>
                            {option.text}
                        </button>
                    ))}
                    <h2 style={{ color: 'black' }}>Posição: {position}%</h2>

                    {isGameFinished ? (
                        <div className="flex justify-center p-10">
                            <div className="flex justify-center">
                                <button onClick={NextOito} className="bg-customyellow font-bold py-2 px-4 rounded text-black text-2xl">
                                    Continuar
                                </button>
                            </div>
                        </div>
                    ) : null}
                </div>
                <div className="absolute bottom-4 right-4">
                    <button onClick={Sair} className="bg-custompink text-white font-bold py-2 px-4 rounded-lg text-lg hover:bg-custompink transition duration-300">
                        Sair
                    </button>
                </div>
            </div>
        </div>
    );
}