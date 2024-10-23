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
      <div className="flex items-center justify-center h-screen">
          <div className="size-4/6 bg-customgreen border border-gray-200 rounded-lg shadow dark:border-gray-700">
          <div className="flex justify-center p-10">
             <div className="flex justify-center"> 
                <button onClick={SecondOnze} className="bg-custompink font-bold py-10 px-10 rounded text-black text-2xl">Continuar</button>
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
