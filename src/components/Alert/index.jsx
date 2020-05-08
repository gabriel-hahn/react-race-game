import React from 'react';

import { AlertContainer, AlertText } from './styles';

const Alert = ({ content }) => (
  <AlertContainer>
    <AlertText>{content}</AlertText>
  </AlertContainer>
);

export default Alert;
