import { useEffect, useState } from 'react';

const CONTROLS = {
  right: 'right',
  left: 'left',
  middle: 'middle',
  pause: 'pause',
};

export const useKeyboardControls = () => {
  const [keyClicked, setKeyClicked] = useState('');

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowLeft':
        case 'a':
        case 'A':
          setKeyClicked(CONTROLS.left);
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          setKeyClicked(CONTROLS.right);
          break;
        case 'ArrowUp':
        case 's':
        case 'S':
          setKeyClicked(CONTROLS.middle);
          break;
        case 'Escape':
        case ' ':
          setKeyClicked(CONTROLS.pause);
          break;
        default:
          // No default updates
      }
    });
  }, []);

  return keyClicked;
};
