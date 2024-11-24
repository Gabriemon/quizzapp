"use client"
import React, { useState } from 'react';

export default function NextOnze({ setCurrentPage, currentState, setCurrentState }) {

    const SecondOnze = () => {
        const newState = [...currentState,]
        setCurrentState(newState)
        setCurrentPage('SecondOnze')
    }

    const Sair = () => {
      setCurrentPage('Inicial');
    }

    return (
     <>
     <div className="bg-cover bg-fundo">
      <div className="flex items-center justify-center h-screen">
          <div className="size-4/6 bg-customgreen rounded-lg shadow dark:border-gray-700">
          <div className="flex justify-center p-10">
            <div>
            <h1 className="text-center text-black text-base md:text-lg lg:text-xl font-bold mt-4">
            E aí, explorador! 🚀 <br/><br/>
    Você mandou muito bem até aqui, mas agora chegou a hora de encarar um novo desafio! 
    Neste quiz, vamos testar o que você sabe e talvez aprender coisas novas pelo caminho. 
    Pronto para mostrar do que é capaz? Boa sorte!
            </h1>
            <h1 className='text-center text-black text-base md:text-lg lg:text-xl font-bold mt-4'>
            Prepare-se para explorar o mundo dos números e descobrir como as operações e frações podem ser incríveis! 
    Aqui, cada desafio é uma chance de aprender mais e testar suas habilidades em matemática. 
    Vamos lá? Mostre do que você é capaz e comece essa aventura agora!
            </h1>
            </div>
              </div>
              <div className="flex justify-center">
                <button onClick={SecondOnze} className="bg-custompink font-bold py-10 px-10 rounded text-black text-2xl transition-all duration-300 hover:scale-110">Continuar</button>
              </div>
              </div>
          <div className="absolute bottom-4 right-4">
            <button onClick={Sair} className="bg-custompink text-white font-bold py-2 px-4 rounded-lg text-lg hover:bg-custompink transition duration-300">
                Sair
            </button>
            </div>
          </div>
          </div>
      </>
    )
};
