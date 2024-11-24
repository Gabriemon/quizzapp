"use client";
import React, { useEffect } from "react";
import ConfettiGenerator from "confetti-js";

export default function ResultCinco({ setCurrentPage, currentState, setCurrentState }) {

    useEffect(() => {
        // Gerar o efeito de confete ao carregar a página
        const confettiSettings = {
            target: "confetti-canvas",
            max: 80, // Máximo de confetes na tela
            size: 1,
            animate: true,
            props: ["square", "triangle", "line"], // Tipos de confetes
            colors: [[238, 118, 33], [47, 97, 245], [88, 248, 84]], // Cores do confete
            clock: 25,
            rotate: true
        };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();

        return () => {
            confetti.clear();
        };
    }, []);

    const Result = () => {
        const newState = [...currentState];
        setCurrentState(newState);
        setCurrentPage('Result');
    };

    const Sair = () => {
        setCurrentPage('Inicial');
    };

    return (
        <>
            <div className="relative bg-cover bg-fundo">
                <canvas id="confetti-canvas" className="absolute top-0 left-0 w-full h-full z-10"></canvas>
                <div className="flex items-center justify-center min-h-screen p-4">
                    <div className="w-full max-w-3xl bg-customgreen rounded-xl shadow-2xl p-8 md:p-12 z-20">
                        <p className="text-center text-black text-lg md:text-xl lg:text-2xl font-semibold mt-4 leading-relaxed">
                            Você se saiu incrível em sua jornada matemática! Cada desafio superado é uma grande vitória, 
                            e você demonstrou muita habilidade e dedicação ao longo do caminho. Seu esforço e dedicação são inspiradores!<br/><br/>

                            Agora, continue sempre com esse entusiasmo e curiosidade. A matemática é cheia de aventuras 
                            e, com sua determinação, você pode conquistar ainda mais desafios! Lembre-se: cada vez que você resolve um 
                            problema, está mais perto de se tornar um verdadeiro mestre da matemática. 💡🚀<br/><br/>

                            Não pare por aqui! Continue explorando, aprendendo e, acima de tudo, se divertindo. O mundo da matemática 
                            está cheio de surpresas, e você está no caminho certo para desbravá-lo! Continue com esse espírito aventureiro, 
                            e você vai longe! 💪🌟
                        </p>
                    </div>
                </div>
                <div className="absolute bottom-8 right-8 z-20">
                    <button 
                        onClick={Sair} 
                        className="bg-custompink text-white font-semibold py-3 px-6 rounded-xl text-lg hover:bg-custompink-dark transition duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Sair
                    </button>
                </div>
            </div>
        </>
    );
}
