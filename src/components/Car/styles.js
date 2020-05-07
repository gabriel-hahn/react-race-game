import styled from 'styled-components';

import { contentCdn } from '../../styles/content';

export const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: flex-end;
`;

export const CarImage = styled.img.attrs({
  src: `${contentCdn.car}`,
})`
  width: 28em;
  margin-left: -5em;
`;
