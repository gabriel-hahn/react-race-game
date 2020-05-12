import styled from 'styled-components';

import RoadImage from '../../assets/images/road.gif';
import { device } from '../../styles/variables';

export const Container = styled.div`
  height: 100vh;
  width: 70vw;
  background-image: url(${RoadImage});
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;

  @media ${device.laptopM} {
    width: 100vw;
  }
`;
