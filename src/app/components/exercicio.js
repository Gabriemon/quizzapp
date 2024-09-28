"use client"
import React, { useState } from "react"

export default function Exercicio({ setCurrentPage, currentState, setCurrentState }) {

    const handleAgeCLick = () => {
        const newState = [...currentState,]
        setCurrentState(newState)
        setCurrentPage('')
    }
    
    return (
        <>
            <h3 className="flex justify-center mb-4 font-semibold text-gray-900 dark:text-black pt-6 mt-9">Oi</h3>
            <button onClick={handleAgeCLick} className="bg-blue-500 text-white font-bold py-2 px-3 mt-0 rounded">Idade</button>
        </>

    )
}