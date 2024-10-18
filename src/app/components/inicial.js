import React, { useState } from "react";

export default function Inicial({ setCurrentPage, currentState, setCurrentState }) {
    const [name, setName] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleAgeClick = () => {
        const newState = [...currentState, { name }]; // Adiciona o nome ao estado atual
        setCurrentState(newState);
        setCurrentPage('Exercicio');
    };

    return (
        <>
            <div className="flex items-center justify-center h-screen p-4">
                {/* Aqui ajustamos a largura e mantemos o formato retangular com padding ajustável */}
                <div className="w-full max-w-4xl bg-customgreen border border-gray-200 rounded-lg shadow-lg p-6 md:p-10 dark:border-gray-700">
                    <h1 className="flex justify-center p-6 text-black text-lg md:text-xl font-bold">Quem somos?</h1>
                    <p className="text-black text-base md:text-lg p-4 text-center">
                        Nós somos estudantes de Tecnologia da faculdade SENAI Felix Guisard, dedicados a tornar a matemática básica mais acessível a todos. Nosso objetivo é incluir e facilitar o aprendizado dessa disciplina, superando barreiras e promovendo um ambiente acolhedor para pessoas de diferentes perfis. Acreditamos que a matemática é uma ferramenta essencial e queremos garantir que todos tenham a oportunidade de compreendê-la e utilizá-la em seu dia a dia. Junte-se a nós nessa missão de transformação e inclusão!
                    </p>
                    <h1 className="flex justify-center p-4 text-black text-lg md:text-xl font-bold">Qual o seu nome?</h1>
                    <div className="flex justify-center pb-4">
                        <input
                            type="text"
                            placeholder="Digite seu nome..."
                            value={name}
                            onChange={handleNameChange}
                            className="w-full max-w-xs bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-500 hover:border-slate-300 shadow-lg shadow-gray-100 ring-4 ring-transparent focus:ring-slate-100"
                        />
                    </div>
                    <h1 className="flex justify-center p-4 text-black text-lg md:text-xl font-bold">Quantos anos você tem?</h1>
                    
                    {/* Ajuste responsivo nos botões */}
                    <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 p-4">
                        <button onClick={handleAgeClick} className="bg-customyellow font-bold py-4 px-6 rounded text-black text-lg md:text-2xl w-full md:w-auto">
                            5 - 7
                        </button>
                        <button onClick={handleAgeClick} className="bg-customsalmon font-bold py-4 px-6 rounded text-black text-lg md:text-2xl w-full md:w-auto">
                            8 - 10
                        </button>
                        <button onClick={handleAgeClick} className="bg-custompink font-bold py-4 px-6 rounded text-black text-lg md:text-2xl w-full md:w-auto">
                            11 - 13
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
