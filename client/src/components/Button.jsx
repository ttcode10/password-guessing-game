import styled from 'styled-components';

import { colors, fontFamily } from '../themes';

const Button = styled.button`
  box-sizing: border-box;
  font-size: 0.875rem;
  color: ${(props) => (props.primary ? colors.white : colors.bluePrimary)};
  font-family: ${fontFamily};
  text-align: center;
  border-radius: 4px;
  border: ${(props) => (props.primary ? 'none' : `1px solid ${colors.bluePrimary}`)};
  background: ${(props) => (props.primary ? colors.bluePrimary : colors.white)};
  padding: 0.5rem;
  cursor: pointer;
  outline: 0;
  width: 100%;
  height: 40px;

  &:hover {
    background-color: ${colors.blueSecondary};
    color: ${colors.white};
    border: none;
  }

  & ~ & {
    margin-left: 1rem;
  }
`;

export default Button;
