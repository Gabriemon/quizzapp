"use client"
import { Input } from "postcss"
import React, { useState } from "react"
import QuizzCinco from "./quizzcinco";

export default function Quizz({ setCurrentPage, currentState, setCurrentState }) {

    const QuizzCinco = () => {
        const newState = [...currentState,]
        setCurrentState(newState)
        setCurrentPage('QuizzCinco')
    }

    return (
        <>
            <div className="bg-cover bg-fundo">
            <div className="flex items-center justify-center min-h-screen p-4">
            <div className="w-full max-w-4xl bg-customgreen rounded-lg shadow-lg p-6">
                    <h1 className=" text-center text-black text-lg md:text-xl lg:text-2xl font-bold"> Parabéns jovem aventureiro! 🚀</h1><br/>
                    <p className="text-center text-black text-base md:text-lg lg:text-xl font-bold"> Parabéns! Nessa etapa você concluiu o nosso desafio de assimilar o número de estrelas mas agora vc passará por um
                        novo desafio. A partir de agora você irá responder um Quizz com pergutas para crianças da sua idade, boa sorte !
                    </p>
                    <div className="flex justify-center pb-4">
                    </div>
                    <h1 className=" text-center text-black text-base md:text-lg lg:text-xl font-bold">Pronto para o próximo desafio? Clique no botão abaixo !</h1>
                    <div className="flex justify-center p-10">
                        <div className="flex justify-center "> 
                            <button onClick={QuizzCinco} className="bg-customyellow font-bold py-10 px-10 rounded text-black text-2xl transition-all duration-300 hover:scale-110">Continuar</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}