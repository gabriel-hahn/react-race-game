import { useEffect, useState } from 'react';

import { controls } from '../enums/CarControls';

export const useKeyboardControls = () => {
  const [keyClicked, setKeyClicked] = useState('');

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowLeft':
        case 'a':
        case 'A':
          setKeyClicked(controls.left);
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          setKeyClicked(controls.right);
          break;
        case 'ArrowUp':
        case 's':
        case 'S':
          setKeyClicked(controls.middle);
          break;
        case 'Escape':
        case ' ':
          setKeyClicked(controls.pause);
          break;
        default:
          // No default updates
      }
    });
  }, []);

  return keyClicked;
};
