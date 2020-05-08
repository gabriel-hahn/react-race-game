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
  height: 270px;
  width: 270px;
  margin-left: ${(props) => (
    props.carDirection === controls.right ? '36rem'
      : (props.carDirection === controls.left ? '-36rem' : '-3rem'))};
`;
