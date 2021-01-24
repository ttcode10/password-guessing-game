import styled from 'styled-components';

import { colors, fontFamily } from '../themes';

const Input = styled.input`
  box-sizing: border-box;
  border-radius: 4px;
  border: 2px solid ${colors.border};
  background: ${colors.white};
  padding: 0.125rem;
  outline: 0;
  width: 320px;
  height: 60px;
  color: ${colors.bluePrimary};
  font-family: ${fontFamily};
  font-size: 1.125rem;
  font-weight: 500;
  letter-spacing: 1rem;
  text-align: center;

  &:focus {
    border-color: ${colors.bluePrimary};
  }

  &::placeholder {
    color: ${colors.greyTertiary};
    font-size: 1rem;
    letter-spacing: normal;
  }
`;

export default Input;
