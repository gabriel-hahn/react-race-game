import styled from 'styled-components';

import Car from '../../assets/images/car.png';

import { controls } from '../../enums/CarControls';
import { device } from '../../styles/variables';

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: flex-end;
  position: relative;
`;

export const CarImage = styled.img.attrs({
  src: `${Car}`,
})`
  position: absolute;
  height: 270px;
  width: 270px;
  margin-left: -1rem;
  left:${(props) => props.carDirection === controls.left ? '1rem' : 'unset'};
  right:${(props) => props.carDirection === controls.right ? '1rem' : 'unset'};

  @media ${device.laptopM} {
    height: 240px;
    width: 240px;
  }
`;
