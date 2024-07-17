import React, { useContext, useEffect, useState } from 'react';
import Cards from '../components/Cards.jsx';
import { useNavigate } from 'react-router-dom';
import { playerContext } from '../context/playerContext';
import { computerContext } from '../context/computerContext';

function generateCards() {
    let deck = [];
    for (let i = 1; i <= 13; i++) {
        deck.push(i, i, i, i);
    }
    return deck;
}

export default function GamePage() {
    const { player, setPlayer, playerPoints, setPlayerPoints } = useContext(playerContext);
    const { computer, setComputer, computerPoints, setComputerPoints } = useContext(computerContext);

    // temp state for the game
    const [playerWins, setPlayerWins] = useState(0)
    const [computerWins, setComputerWins] = useState(0)

    const [deck, setDeck] = useState(generateCards);
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();

    if(!player?.name){
      navigate('/')
    }

    function randomizeCards(root) {
        const shuffledRoot = root.sort(() => Math.random() - 0.5);
        const halfway = Math.floor(shuffledRoot.length / 2);
        setPlayer({ ...player, cardDeck: shuffledRoot.slice(0, halfway) });
        setComputer({ ...computer, cardDeck: shuffledRoot.slice(halfway) });
    }

    useEffect(() => {
      if (!player?.name) {
          navigate('/');
      } else {
          randomizeCards(deck);
          setPlayerWins(0);
          setComputerWins(0);
          setPlayerPoints(0);
          setComputerPoints(0);
          setIndex(0);
      }
  }, [deck, player?.name]);

  
  function nextRound() {
    if (index >= 25) {
      let winner = '';
      if (playerPoints > computerPoints) {
        winner = 'Player';
        setPlayerWins(playerWins + 1)
      } else if (playerPoints < computerPoints) {
        winner = 'Computer';
        setComputerWins(computerWins + 1)
      } else {
        winner = 'Tie';
      }
      setPlayer({ ...player, winner });
      navigate('/score');
      return;
    }
    const playerCard = player.cardDeck[index];
    const computerCard = computer.cardDeck[index];
    
    if (playerCard > computerCard) {
      setPlayerPoints(playerPoints + 1);
    } else if (playerCard < computerCard) {
      setComputerPoints(computerPoints + 1);
    }
    setIndex(index + 1);
  }
  
  
  return (
    <div className="flex flex-col items-center p-4">
    <div className="flex space-x-8 mb-8">
        <div className="flex flex-col items-center text-center">
            <h2 className="text-xl font-bold mb-4">Player's Card</h2>
            {player.cardDeck && <Cards value={player.cardDeck[index]} />}
            <h2 className="text-lg mt-4">Player Points: {playerPoints}</h2>
        </div>
        <div className="flex flex-col items-center text-center">
            <h2 className="text-xl font-bold mb-4">Computer's Card</h2>
            {computer.cardDeck && <Cards value={computer.cardDeck[index]} />}
            <h2 className="text-lg mt-4">Computer Points: {computerPoints}</h2>
        </div>
    </div>
    <button
        onClick={nextRound}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
    >
        Draw Card
    </button>
</div>
    );
}
