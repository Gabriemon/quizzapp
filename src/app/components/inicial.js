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
            <div className="flex flex-row"/>
            <div className="basis-1/4 min-w-full justify-center">
            <h1>
                Matemática Para Todos
            </h1>
            </div>
        </>

    )
}