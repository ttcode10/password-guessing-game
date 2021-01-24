import styled from 'styled-components';

import { colors, fontFamily } from '../themes';

const Button = styled.button`
  box-sizing: border-box;
  font-size: 0.875rem;
  color: ${colors.bluePrimary};
  font-family: ${fontFamily};
  text-align: center;
  border-radius: 4px;
  border: 1px solid ${colors.bluePrimary};
  background: ${(props) => props.highlighted ? colors.bluePrimary : colors.white};
  padding: 0.5rem;
  cursor: pointer;
  outline: 0;

  &:hover {
    background-color: ${colors.blueSecondary};
  }
`;

export default Button;
