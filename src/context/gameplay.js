import React, { useState } from 'react';
import PropTypes from 'prop-types';

const GameplayContext = React.createContext();

export const GameplayProvider = ({ children }) => {
  const [paused, setPaused] = useState(false);
  const [finished, setFinished] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [username, setUsername] = useState('');
  const [lifes, setLifes] = useState(3);
  const [laps, setLaps] = useState(1);

  const handlePauseGame = () => {
    setPaused((previousPausedState) => !previousPausedState);
  };

  const handleStartGame = () => {
    setStartGame((previousStartGameState) => !previousStartGameState);
  };

  const handleUsernameAdd = (name) => {
    setUsername(name);
  };

  const handleGameOver = () => {
    setFinished(true);
  };

  const handleRestartGame = () => {
    // Restart game
  };

  const handleLostLife = () => {
    setLifes((lifeState) => {
      const updatedLife = lifeState - 1;

      if (updatedLife === 0) {
        handleGameOver();
      }

      return updatedLife;
    });
  };

  const handleIncrementLap = () => {
    setLaps((lapState) => lapState + 1);
  };

  return (
    <GameplayContext.Provider value={{
      handleIncrementLap,
      handleUsernameAdd,
      handlePauseGame,
      handleStartGame,
      handleLostLife,
      finished,
      startGame,
      username,
      paused,
      lifes,
      laps,
    }}
    >
      {children}
    </GameplayContext.Provider>
  );
};

GameplayProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default GameplayContext;
