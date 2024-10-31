"use client"
import React, { useState } from 'react';

export default function NextOito({ setCurrentPage, currentState, setCurrentState }) {

    const SecondOito = () => {
        const newState = [...currentState,]
        setCurrentState(newState)
        setCurrentPage('SecondOito')
    }

    const Sair = () => {
      setCurrentPage('Inicial');
    }

    return (
     <>
      <div className="flex items-center justify-center h-screen">
          <div className="size-4/6 bg-customgreen border border-gray-200 rounded-lg shadow dark:border-gray-700">
          <div className='flex justify-center'>
            <h1 className="text-center text-black text-base md:text-lg lg:text-xl font-bold mt-4">Olá, Jovem! 🎉 
            Você se saiu muito bem nessa primeira etapa mas agora temos um novo desafio para você, neste novo desafio
            será haverá um incrível quizz para testart seus conhecimentos. Boa sorte !</h1>
            
            <p className="text-center text-black text-base md:text-lg lg:text-xl font-bold mt-4">O que você irá encontrar nesse novo desafio :</p>

          </div>
          <div className="flex justify-center p-10">
             <div className="flex justify-center"> 
                <button onClick={SecondOito} className="bg-custompink font-bold py-10 px-10 rounded text-black text-2xl">Continuar</button>
              </div>
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
};
