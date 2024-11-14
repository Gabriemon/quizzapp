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
            <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-4xl bg-customgreen border border-gray-200 rounded-lg shadow-lg p-6">
                    <h1 className=" flex justify-center p-10 text-black text-lg font-bold"> Parabéns jovem aventureiro! </h1>
                    <p className="text-black text-lg p-4 text-center font-bold"> Parabéns! Nessa etapa você concluiu o nosso desafio de assimilar o número de estrelas mas agora vc passará por um
                        novo desafio. A partir de agora você irá responder um Quizz com pergutas para crianças da sua idade, boa sorte !
                    </p>
                    <div className="flex justify-center pb-4">
                    </div>
                    <h1 className=" flex justify-center p-4 text-black text-lg font-bold">Pronto para o próximo desafio? Clique no botão abaixo !</h1>
                    <div className="flex justify-center p-10">
                        <div className="flex justify-center"> 
                            <button onClick={QuizzCinco} className="bg-customyellow font-bold py-10 px-10 rounded text-black text-2xl">Continuar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}