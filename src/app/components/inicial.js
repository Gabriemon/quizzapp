"use client"
import React, { useState } from "react"

export default function Inicial({ setCurrentPage, currentState, setCurrentState }) {

    const handleAgeCLick = () => {
        const newState = [...currentState,]
        setCurrentState(newState)
        setCurrentPage('Exercicio')
    }

    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="size-4/6 bg-customgreen border border-gray-200 rounded-lg shadow dark:border-gray-700">
                    <h1 className=" flex justify-center p-10 text-black text-lg font-bold"> Quem somos? </h1>
                    <p className="text-black text-lg p-4 text-center "> Nós somos estudantes de Tecnologia da faculdade SENAI Felix Guisard, dedicados a tornar a matemática básica mais acessível a todos. Nosso objetivo é incluir e facilitar o
                        aprendizado dessa disciplina, superando barreiras e promovendo um ambiente acolhedor para pessoas de diferentes perfis. Acreditamos que a matemática é uma ferramenta
                        essencial e queremos garantir que todos tenham a oportunidade de compreendê-la e utilizá-la em seu dia a dia. Junte-se a nós nessa missão de transformação e inclusão!</p>
                    <h1 className=" flex justify-center p-10 text-black text-lg font-bold">Quantos anos você tem?</h1>
                    <div className="flex justify-center p-16">
                        <div className="pr-48">
                            <button onClick={handleAgeCLick} className="bg-customyellow font-bold py-10 px-10 rounded text-black text-2xl">5 - 7</button>
                        </div>
                        <div className="pr-48">
                            <button onClick={handleAgeCLick} className="bg-customsalmon font-bold py-10 px-10 mt-0 rounded text-black text-2xl">8 - 10</button>
                        </div>
                        <div>
                            <button onClick={handleAgeCLick} className="bg-custompink font-bold py-10 px-10 mt-0 rounded text-black text-2xl">11 - 13</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}