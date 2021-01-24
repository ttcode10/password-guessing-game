import styled from 'styled-components';

import { colors } from '../themes';

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 60px;
  background: ${colors.black};
  color: ${colors.white};
`;

export default Header;
