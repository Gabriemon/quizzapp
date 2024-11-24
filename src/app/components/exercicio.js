"use client";
import React from "react";

export default function Inicial({ setCurrentPage, currentState, setCurrentState }) {
    // Pega o nome armazenado no currentState
    const nome = currentState.length > 0 ? currentState[0].name : "Explorador";

    const Game = () => {
        setCurrentPage('Jogo');
    };

    const Sair = () => {
        setCurrentPage('Inicial');
    };

    return (
        <>
            <div className="bg-cover bg-fundo">
            <div className="flex items-center justify-center min-h-screen p-4">
                <div className="w-full max-w-4xl bg-customgreen rounded-lg shadow-lg p-6">
                    <h1 className="text-center text-black text-lg md:text-xl lg:text-2xl font-bold">
                    Olá, aventureiro da matemática! 🚀
                    </h1><br/>

                    <p className="text-center text-black text-base md:text-lg lg:text-xl font-bold">
                    Você está prestes a embarcar em uma aventura incrível no mundo da matemática! Aqui você encontrará muita diversão e aprendizado.
                    </p><br/>
                    <p className="text-center text-black text-base md:text-lg lg:text-xl font-bold">
                    Primeiro, teremos a Contagem Divertida, onde você vai contar objetos coloridos. Depois, enfrentaremos problemas de adição e subtração, resolvendo desafios simples de forma super divertida. Preparado para começar? 🚀
                    </p><br/>   

                    <div className="flex justify-center mt-8">
                        <button
                            onClick={Game}
                            className="bg-custompink font-bold py-4 px-8 rounded text-black text-lg md:text-xl lg:text-2xl transition-all duration-300 hover:scale-110"
                        >
                            Vamos começar!
                        </button>
                    </div>
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
        </div>
        </>
    );
}
