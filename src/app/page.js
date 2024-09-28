"use client"
import { React, useState, setState } from "react";
import Inicial from "./components/inicial";
import Exercicio from "./components/exercicio";


function MyComponent ({value, doSomething}) {
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
      {currentPage === 'Inicial' && <Inicial setCurrentPage={setCurrentPage} currentState={currentState} setCurrentState={setCurrentState}/>}
      {currentPage === 'Exercicio' && <Exercicio setCurrentPage={setCurrentPage} currentState={currentState} setCurrentState={setCurrentState}/>}
    </div>
  );
}