import React, { useState } from 'react';
import './App.css';
import GamePage from './views/GamePage';
import ScorePage from './views/ScorePage';
import HomePage from './views/HomePage';
import { Routes, Route } from 'react-router-dom';
import { playerContext } from './context/playerContext';
import { computerContext } from './context/computerContext';

function App() {
  const [player, setPlayer] = useState({});
  const [computer, setComputer] = useState({});
  const [playerPoints, setPlayerPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);

  return (
    <playerContext.Provider value={{ player, setPlayer, playerPoints, setPlayerPoints }}>
      <computerContext.Provider value={{ computer, setComputer, computerPoints, setComputerPoints }}>
        <div>
          <Routes>
            <Route path='/' element={<HomePage setPlayer={setPlayer} />} />
            <Route path='/game' element={<GamePage />} />
            <Route path='/score' element={<ScorePage />} />
          </Routes>
        </div>
      </computerContext.Provider>
    </playerContext.Provider>
  );
}

export default App;
