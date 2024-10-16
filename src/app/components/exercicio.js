"use client"
import { Input } from "postcss"
import React, { useState } from "react"

export default function Inicial({ setCurrentPage, currentState, setCurrentState }) {

    const [name, setName] = useState("");

    const nome = currentState.length > 0 ? currentState[0].name : "Explorador";

    const Game = () => {
        const newState = [...currentState,]
        setCurrentState(newState)
        setCurrentPage('Jogo')
    }

    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="size-4/6 bg-customgreen border border-gray-200 rounded-lg shadow dark:border-gray-700">
                    <h1 className=" flex justify-center p-4 text-black text-lg font-bold">Olá {name}Seja bem vindo ao Quiz de Desafios de Matemática para Crianças de 5 a 7 Anos!</h1>
                    <p className=" flex justify-center p-4 text-black text-lg font-bold">Olá, pequeno explorador! 🎉 Você está prestes a embarcar em uma aventura incrível no mundo da
                        matemática! Neste quiz divertido, você encontrará muitos desafios legais que vão fazer você pensar, contar e, principalmente, se divertir!</p>
                    <p className="flex justify-center p-4 text-black text-lg font-bold">
                        O que você vai encontrar:</p>
                    <li className="text-black font-bold pl-8">Contagem Divertida: Prepare-se para contar objetos coloridos, como frutas ou brinquedos. Você vai aprender a contar até 20 e até mais, se quiser!</li>
                    <br/>
                    <li className="text-black font-bold pl-8">Problemas de Adição e Subtração: Aqui, você vai resolver pequenas adições e subtrações. Por exemplo, “Se você tem 3 maçãs e ganha mais 2, quantas maçãs você 
                    tem agora?” Vamos lá, é só somar!</li>
                <div className="flex justify-center p-16">
                <button onClick={Game} className="bg-custompink font-bold py-10 px-10 mt-0 rounded text-black text-2xl">Vamos começar !</button>
                </div>
                </div>
            </div>
        </>
    )
}