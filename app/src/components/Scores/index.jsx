import React from 'react';
import { RotateSpinner } from 'react-spinners-kit';

import {
  LoadingContainer,
  ScoresContainer,
  ScoreDescription,
  ScoreLaps,
  ScoreLifes,
  ScoresDetails,
} from './styles';

const Scores = ({ scores }) => (
  <>
    {!scores ? (
      <LoadingContainer>
        <RotateSpinner size={30} color="#171717" />
      </LoadingContainer>
      ) : (
      <ScoresContainer>
        <ScoresDetails>
          <ScoreDescription>Nome</ScoreDescription>
          <ScoreLaps>Voltas</ScoreLaps>
          <ScoreLifes>Vidas</ScoreLifes>
        </ScoresDetails>
        {scores.users.map(user => (
          <ScoresDetails key={user.id}>
            <ScoreDescription>{user.name}</ScoreDescription>
            <ScoreLaps>{user.laps}</ScoreLaps>
            <ScoreLifes>{user.lifes}</ScoreLifes>
          </ScoresDetails>
        ))}
      </ScoresContainer>
    )}
  </>
);

export default Scores;
