"use client"
import { Input } from "postcss"
import React, { useState } from "react"
import GameOito from "./gameoito"



export default function QuizzOito({ setCurrentPage, currentState, setCurrentState }) {

    const GameOito = () => {
        const newState = [...currentState,]
        setCurrentState(newState)
        setCurrentPage('GameOito')
    }

    const Sair = () => {
        setCurrentPage('Inicial');
    }

    return (
        <>
        <div className="bg-cover bg-fundo">
            <div className="flex items-center justify-center min-h-screen p-4">
                <div className="w-full max-w-4xl bg-customgreen rounded-lg shadow-lg p-6">
                    <div className="text-center text-black text-base md:text-lg lg:text-xl font-bold mt-4">
                        <p className="text-center text-black text-lg md:text-xl lg:text-2xl font-bold">Olá, aventureiro da matemática! 🚀</p>
                        <br />
                        <p>Seja bem-vindo ao Quiz de Desafios Matemáticos para os Super Exploradores de 8 a 10 Anos! Você está prestes a embarcar em uma jornada emocionante pelo
                            universo dos números e das formas! Aqui, você vai encontrar perguntas desafiadoras que vão testar suas habilidades de raciocínio, contagem e resolução de
                            problemas. </p>
                        <br />
                        <br />
                        Prepare-se para desvendar mistérios, resolver enigmas e se divertir muito enquanto aprende! Cada desafio é uma oportunidade de brilhar e mostrar todo o seu talento matemático. Vamos lá? A aventura começa agora! 🌟
                        <div className="flex justify-center mt-8">
                            <button onClick={GameOito} className="bg-custompink font-bold py-4 px-8 rounded text-black text-lg md:text-xl lg:text-2xl hover:bg-pink-400 transition duration-300">Vamos começar!</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-4 right-4">
                <button onClick={Sair} className="bg-custompink text-white font-bold py-2 px-4 rounded-lg text-lg hover:bg-custompink transition duration-300">
                    Sair
                </button>
            </div>
            </div>
        </>
    )
}