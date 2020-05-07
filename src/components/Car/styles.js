import styled from 'styled-components';

import { controls } from '../../enums/CarControls';
import { contentCdn } from '../../styles/content';

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: flex-end;
`;

export const CarImage = styled.img.attrs({
  src: `${contentCdn.car}`,
})`
  width: 240px;
  margin-left: ${(props) => (
    props.carDirection === controls.right ? '34rem'
      : (props.carDirection === controls.left ? '-34rem' : '-3rem'))};
`;
