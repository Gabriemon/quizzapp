"use client"
import { React, useState, setState } from "react";
import Inicial from "./components/inicial";
import Exercicio from "./components/exercicio";
import Jogo from "./components/jogo";
import Quizz from "./components/quizz";
import QuizzCinco from "./components/quizzcinco";
import QuizzOito from "./components/quizzoito";
import QuizzOnze from "./components/quizzonze";
import GameOito from "./components/gameoito";


function MyComponent({ value, doSomething }) {
  return <button onClick={() => doSomething('Inicial')}>The Value: {value}</button>

}

export default function Home() {

  // Main entry point

  const [currentPage, setCurrentPage] = useState('Inicial')

  const [currentState, setCurrentState] = useState([])


  const navigateTo = (where) => {
    setCurrentPage(where)
  }

  return (
    <div>
      {currentPage === 'Inicial' && <Inicial setCurrentPage={setCurrentPage} currentState={currentState} setCurrentState={setCurrentState} />}
      {currentPage === 'Exercicio' && <Exercicio setCurrentPage={setCurrentPage} currentState={currentState} setCurrentState={setCurrentState} />}
      {currentPage === 'Jogo' && <Jogo setCurrentPage={setCurrentPage} currentState={currentState} setCurrentState={setCurrentState} />}
      {currentPage === 'Quizz' && <Quizz setCurrentPage={setCurrentPage} currentState={currentState} setCurrentState={setCurrentState} />}
      {currentPage === 'QuizzCinco' && <QuizzCinco setCurrentPage={setCurrentPage} currentState={currentState} setCurrentState={setCurrentState} />}
      {currentPage === 'QuizzOito' && <QuizzOito setCurrentPage={setCurrentPage} currentState={currentState} setCurrentState={setCurrentState} />}
      {currentPage === 'QuizzOnze' && <QuizzOnze setCurrentPage={setCurrentPage} currentState={currentState} setCurrentState={setCurrentState} />}
      {currentPage === 'GameOito' && <GameOito setCurrentPage={setCurrentPage} currentState={currentState} setCurrentState={setCurrentState} />}

    </div>
  );
}