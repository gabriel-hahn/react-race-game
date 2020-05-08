import React, { useState } from 'react';

const GameplayContext = React.createContext();

export const GameplayProvider = ({ children }) => {
  const [paused, setPaused] = useState(false);
  const [startGame, setStartGame] = useState(true);
  const [lifes, setLifes] = useState(3);

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

  };

  return (
    <GameplayContext.Provider value={{
      handlePauseGame,
      handleStartGame,
      handleLostLife,
      paused,
      startGame,
    }}
    >
      {children}
    </GameplayContext.Provider>
  );
};

export default GameplayContext;
