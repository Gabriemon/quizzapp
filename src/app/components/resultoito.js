"use client"
import React, { useState } from 'react';

export default function ResultOito({ setCurrentPage, currentState, setCurrentState }) {

    const ResultOito = () => {
        const newState = [...currentState,]
        setCurrentState(newState)
        setCurrentPage('ResultOito')
    }

    const Sair = () => {
      setCurrentPage('Inicial');
    }

    return (
     <>
      <div className="bg-cover bg-fundo">
      <div className="flex items-center justify-center h-screen">
          <div className="size-4/6 bg-customgreen rounded-lg shadow dark:border-gray-700">
        
              </div>
          </div>
          <div className="absolute bottom-4 right-4">
            <button onClick={Sair} className="bg-custompink text-white font-bold py-2 px-4 rounded-lg text-lg hover:bg-custompink transition duration-300">
                Sair
            </button>
          </div></div>
      </>
    )
};
