import React, { useReducer, useMemo } from 'react';
import PropTypes from 'prop-types';

const GameplayContext = React.createContext();

export const Actions = {
  PAUSE_CONTINUE: 'PAUSE_CONTINUE',
  FINISH_GAME: 'FINISH_GAME',
  START_GAME: 'START_GAME',
  DECREASE_LIFE: 'DECREASE_LIFE',
  INCREASE_LAP: 'INCREASE_LAP',
  RESTART: 'RESTART',
};

const initialState = {
  paused: false,
  finished: false,
  startGame: false,
  username: '',
  lifes: 3,
  laps: 1,
};

const gameplayReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.PAUSE_CONTINUE:
      return { ...state, paused: !state.paused };
    case Actions.FINISH_GAME:
      return { ...state, finished: true };
    case Actions.START_GAME:
      return { ...state, startGame: true, username: action.payload };
    case Actions.DECREASE_LIFE:
      return { ...state, lifes: state.lifes - 1 };
    case Actions.INCREASE_LAP:
      return { ...state, laps: state.laps + 1 };
    case Actions.RESTART:
      return { ...initialState };
    default:
      return state;
  }
};

export const GameplayProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameplayReducer, initialState);

  const contextValue = useMemo(() => ({
    ...state,
    dispatch,
  }), [state, dispatch]);

  return (
    <GameplayContext.Provider value={contextValue}>
      {children}
    </GameplayContext.Provider>
  );
};

GameplayProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default GameplayContext;
