"use client"
import React, { useState } from 'react';

export default function GameOito({ setCurrentPage, currentState, setCurrentState }) {

    const GameOito = () => {
        const newState = [...currentState,]
        setCurrentState(newState)
        setCurrentPage('GameOito')
    }

 // Certifique-se de ter este arquivo para estilos

// Lista de frações e suas equivalências
const fractionPairs = [
  { id: 1, value: '1/2', equivalent: '2/4' },
  { id: 2, value: '3/4', equivalent: '6/8' },
  { id: 3, value: '1/3', equivalent: '2/6' },
  { id: 4, value: '3/5', equivalent: '6/10' },
  { id: 5, value: '1/4', equivalent: '2/8' },
  { id: 6, value: '2/3', equivalent: '4/6' },
];

// Embaralha as cartas
const shuffleCards = (cards) => {
  return cards.sort(() => Math.random() - 0.5);
};

const MemoryGame = () => {
  const [cards, setCards] = useState(shuffleCards([...fractionPairs, ...fractionPairs]));
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const handleCardClick = (card) => {
    if (flippedCards.length < 2 && !flippedCards.includes(card.id) && !matchedCards.includes(card.id)) {
      setFlippedCards((prev) => [...prev, card.id]);

      if (flippedCards.length === 1) {
        setTurns(turns + 1);
        const firstCard = cards.find((c) => c.id === flippedCards[0]);
        if (firstCard.equivalent === card.equivalent) {
          setMatchedCards((prev) => [...prev, firstCard.id, card.id]);
        }

        setTimeout(() => setFlippedCards([]), 1000);
      }
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Jogo da Memória de Frações</h1>
      <h2>Turnos: {turns}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 100px)', gap: '10px', justifyContent: 'center' }}>
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card)}
            style={{
              width: '100px',
              height: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: flippedCards.includes(card.id) || matchedCards.includes(card.id) ? 'lightgreen' : 'lightgray',
              cursor: 'pointer',
              border: '1px solid black',
              fontSize: '20px',
            }}
          >
            {flippedCards.includes(card.id) || matchedCards.includes(card.id) ? card.value : '?'}
          </div>
        ))}
      </div>
      {matchedCards.length === cards.length && <h2>Parabéns! Você ganhou!</h2>}
    </div>
  );
};

// Componente principal
const App = () => {
  return (
    <div>
      <MemoryGame />
    </div>
  );
}};
