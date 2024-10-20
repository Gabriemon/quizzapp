"use client"
import React, { useState } from "react"

export default function Inicial({ setCurrentPage, currentState, setCurrentState }) {

    const [name, setName] = useState("");

    const nome = currentState.length > 0 ? currentState[0].name : "Explorador";

    const Game = () => {
        const newState = [...currentState]
        setCurrentState(newState)
        setCurrentPage('Jogo')
    }

    const Sair = () => {
        setCurrentPage('Inicial');
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
                <div className="w-full max-w-4xl bg-customgreen border border-gray-200 rounded-lg shadow-lg p-6">
                    <h1 className="text-center text-black text-lg md:text-xl lg:text-2xl font-bold">Olá {name}, seja bem-vindo ao Quiz de Desafios de Matemática para Crianças de 5 a 7 Anos!</h1>
                    
                    <p className="text-center text-black text-base md:text-lg lg:text-xl font-bold mt-4">Olá, pequeno explorador! 🎉 Você está prestes a embarcar em uma aventura incrível no mundo da matemática! Neste quiz divertido, você encontrará muitos desafios legais que vão fazer você pensar, contar e, principalmente, se divertir!</p>

                    <p className="text-center text-black text-base md:text-lg lg:text-xl font-bold mt-4">O que você vai encontrar:</p>

                    <ul className="list-inside list-disc pl-6 md:pl-10">
                        <li className="text-black text-base md:text-lg lg:text-xl font-bold mt-2">Contagem Divertida: Prepare-se para contar objetos coloridos, como frutas ou brinquedos. Você vai aprender a contar até 20 e até mais, se quiser!</li>
                        <li className="text-black text-base md:text-lg lg:text-xl font-bold mt-2">Problemas de Adição e Subtração: Aqui, você vai resolver pequenas adições e subtrações. Por exemplo, “Se você tem 3 maçãs e ganha mais 2, quantas maçãs você tem agora?” Vamos lá, é só somar!</li>
                    </ul>

                    <div className="flex justify-center mt-8">
                        <button onClick={Game} className="bg-custompink font-bold py-4 px-8 rounded text-black text-lg md:text-xl lg:text-2xl hover:bg-pink-400 transition duration-300">Vamos começar!</button>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-4 right-4">
                <button onClick={Sair} className="bg-custompink text-white font-bold py-2 px-4 rounded-lg text-lg hover:bg-custompink transition duration-300">
                    Sair
                </button>
            </div>
        </>
    )
}
