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
import ResultCinco from "./components/resultcinco";
import NextOito from "./components/nextoito";
import SecondOito from "./components/segundoquizzoito";
import ResultOito from "./components/resultoito";
import GameOnze from "./components/gameonze";
import NextOnze from "./components/nextonze";
import SecondOnze from "./components/segundoquizzonze";
import ResultOnze from "./components/resultonze";


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
      {currentPage === 'GameOnze' && <GameOnze setCurrentPage={setCurrentPage} currentState={currentState} setCurrentState={setCurrentState} />}
      {currentPage === 'ResultCinco' && <ResultCinco setCurrentPage={setCurrentPage} currentState={currentState} setCurrentState={setCurrentState} />}
      {currentPage === 'NextOito' && <NextOito setCurrentPage={setCurrentPage} currentState={currentState} setCurrentState={setCurrentState} />}
      {currentPage === 'SecondOito' && <SecondOito setCurrentPage={setCurrentPage} currentState={currentState} setCurrentState={setCurrentState} />}
      {currentPage === 'ResultOito' && <ResultOito setCurrentPage={setCurrentPage} currentState={currentState} setCurrentState={setCurrentState} />}
      {currentPage === 'NextOnze' && <NextOnze setCurrentPage={setCurrentPage} currentState={currentState} setCurrentState={setCurrentState} />}
      {currentPage === 'SecondOnze' && <SecondOnze setCurrentPage={setCurrentPage} currentState={currentState} setCurrentState={setCurrentState} />}
      {currentPage === 'ResultOnze' && <ResultOnze setCurrentPage={setCurrentPage} currentState={currentState} setCurrentState={setCurrentState} />}



    </div>
  );
}