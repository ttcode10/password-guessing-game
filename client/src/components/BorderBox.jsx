import styled from 'styled-components';

import { colors } from '../themes';

const BorderBox = styled.div`
  box-sizing: border-box;
  border-radius: 4px;
  border: 2px ${colors.border} ${(props) => (props.dashed ? 'dotted' : 'solid')};
  background: ${colors.white};
  padding: 0.125rem;
  outline: 0;
  width: 100%;
  height: 100%;
`;

export default BorderBox;
