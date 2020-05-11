import React from 'react';
import PropTypes from 'prop-types';

import { AlertContainer, AlertText } from './styles';

const Alert = ({ content }) => (
  <AlertContainer data-testid="alert">
    <AlertText>{content}</AlertText>
  </AlertContainer>
);

Alert.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Alert;
