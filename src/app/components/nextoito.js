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
    <div className="bg-cover bg-fundo">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-4xl bg-customgreen border border-gray-200 rounded-lg shadow-lg p-6">
          <div className='flex justify-center text-center text-black text-base md:text-lg lg:text-xl font-bold mt-4'>
            <h1 className="text-center text-black text-lg md:text-xl lg:text-2xl font-bold">Olá, Jovem Matemático! 🎉
              <br />
              <p>Parabéns por ter superado com sucesso a primeira etapa! Você demonstrou grande capacidade, concentração e lógica para resolver os desafios iniciais, e agora o 
              próximo passo na sua jornada está diante de você. 😎</p>
              <br/>
              <p>Neste novo desafio, você será convidado a participar de um quizz matemático incrível, cheio de questões que desafiarão sua mente! 
                Serão perguntas sobre frações, problemas matemáticos, raciocínio lógico e muito mais. </p>
            </h1>
          </div>
          <div>
            <br />
            <p className="text-center text-black text-lg md:text-xl lg:text-2xl font-bold">Boa sorte !</p>

          </div>
          <div className="flex justify-center p-10">
            <div className="flex justify-center">
              <button onClick={SecondOito} className="bg-custompink font-bold py-10 px-10 rounded text-black text-2xl transition-all duration-300 hover:scale-110">Continuar</button>
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
};
