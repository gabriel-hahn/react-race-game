import React, { useState } from 'react';

const GameplayContext = React.createContext();

export const GameplayProvider = ({ children }) => {
  const [paused, setPaused] = useState(false);
  const [startGame, setStartGame] = useState(true);
  const [lifes, setLifes] = useState(3);
  const [laps, setLaps] = useState(1);

  const handlePauseGame = () => {
    setPaused((previousPausedState) => !previousPausedState);
  };

  const handleStartGame = () => {
    setStartGame((previousStartGameState) => !previousStartGameState);
  };

  const handleGameOver = () => {
    // Handle game over, changing the gameplay status and save points.
  };

  const handleLostLife = () => {
    setLifes((lifeState) => lifeState - 1);
  };

  const handleIncrementLap = () => {

  };

  return (
    <GameplayContext.Provider value={{
      handleIncrementLap,
      handlePauseGame,
      handleStartGame,
      handleLostLife,
      paused,
      startGame,
      lifes,
      laps,
    }}
    >
      {children}
    </GameplayContext.Provider>
  );
};

export default GameplayContext;
