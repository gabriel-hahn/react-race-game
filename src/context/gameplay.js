import React, { useState } from 'react';

const GameplayContext = React.createContext();

export const GameplayProvider = ({ children }) => {
  const [paused, setPaused] = useState(false);
  const [startGame, setStartGame] = useState(false);

  const handlePauseGame = () => {
    setPaused((previousPausedState) => !previousPausedState);
  };

  const handleStartGame = () => {
    setStartGame((previousStartGameState) => !previousStartGameState);
  };

  return (
    <GameplayContext.Provider value={{
      handlePauseGame,
      handleStartGame,
      paused,
      startGame,
    }}
    >
      {children}
    </GameplayContext.Provider>
  );
};

export default GameplayContext;
