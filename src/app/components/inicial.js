import React, { useState } from "react";

export default function Inicial({ setCurrentPage, currentState, setCurrentState }) {
    const [name, setName] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleAgeClick = (ageGroup) => {
        const newState = [...currentState, { name, ageGroup }]; 
        setCurrentState(newState);
        setCurrentPage(ageGroup); 
    };

    return (
        <>
        <div className="bg-cover bg-fundo">
        <div 
                className="flex items-center justify-center h-screen p-4" 
                
            >
            <div className="flex items-center justify-center h-screen p-4">
                <div className="w-full max-w-4xl bg-customgreen rounded-lg shadow-lg p-6 md:p-10 dark:border-gray-700">
                    <h1 className="flex justify-center p-6 text-black text-lg md:text-xl font-bold">Quem somos?</h1>
                    <p className="text-black text-base md:text-lg p-4 text-center">
                        Nós somos Maria Victória e Gabriel Alves, estudantes de Tecnologia da faculdade SENAI Felix Guisard, dedicados a tornar a matemática básica mais acessível a todos. Nosso objetivo é incluir e facilitar o aprendizado dessa disciplina, superando barreiras e promovendo um ambiente acolhedor para pessoas de diferentes perfis. Acreditamos que a matemática é uma ferramenta essencial e queremos garantir que todos tenham a oportunidade de compreendê-la e utilizá-la em seu dia a dia. Junte-se a nós nessa missão de transformação e inclusão!
                    </p>
                    
                    <h1 className="flex justify-center p-4 text-black text-lg md:text-xl font-bold">Quantos anos você tem?</h1>
                    
                    {/* Ajuste responsivo nos botões */}
                    <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 p-4">
                        <button onClick={() => handleAgeClick('Exercicio')} className="bg-customyellow font-bold py-4 px-6 rounded text-black text-lg md:text-2xl w-full md:w-auto transition-all duration-300 hover:scale-110">
                            5 - 7
                        </button>
                        <button onClick={() => handleAgeClick('QuizzOito')} className="bg-customsalmon font-bold py-4 px-6 rounded text-black text-lg md:text-2xl w-full md:w-auto transition-all duration-300 hover:scale-110">
                            8 - 10
                        </button>
                        <button onClick={() => handleAgeClick('QuizzOnze')} className="bg-custompink font-bold py-4 px-6 rounded text-black text-lg md:text-2xl w-full md:w-auto transition-all duration-300 hover:scale-110">
                            11 - 13
                        </button>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </>
    );
}
