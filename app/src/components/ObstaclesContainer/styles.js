import styled from 'styled-components';

import { device } from '../../styles/variables';

export const Container = styled.div`
  position: absolute;
  width: 70vw;
  height: 100%;

  @media ${device.laptopM} {
    width: 100vw;
  }
`;
