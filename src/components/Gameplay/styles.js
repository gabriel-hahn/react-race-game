import styled from 'styled-components';

import { contentCdn } from '../../styles/content';

export const Container = styled.div`
  height: 100vh;
  width: 70vw;
  background-image: url(${contentCdn.roadBackground});
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
`;
