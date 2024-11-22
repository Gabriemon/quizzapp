"use client"
import { Input } from "postcss"
import React, { useState } from "react"

export default function QuizzOnze({ setCurrentPage, currentState, setCurrentState }) {

    const GameOnze = () => {
        const newState = [...currentState,]
        setCurrentState(newState)
        setCurrentPage('GameOnze')
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
                        <p>Bem-vindo ao Quiz de Desafios Matemáticos para os Jovens Exploradores de 11 a 13 Anos! Você está prestes a entrar em uma jornada fascinante pelo mundo dos números e das formas! Aqui, encontrará perguntas desafiadoras que vão testar suas habilidades de raciocínio lógico, resolução de problemas e muito mais.</p>
                        <br />
                        <br />
                        Prepare-se para desvendar enigmas, explorar conceitos matemáticos e se divertir enquanto aprende! Cada desafio é uma chance de brilhar e mostrar todo o seu talento. Vamos começar essa aventura incrível? 🚀
                        <div className="flex justify-center mt-8">
                            <button onClick={GameOnze} className="bg-custompink font-bold py-4 px-8 rounded text-black text-lg md:text-xl lg:text-2xl hover:bg-pink-400 transition duration-300">Vamos começar!</button>
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