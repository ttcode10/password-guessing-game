import React from 'react';

import { Header, H1Text } from './components';
import { Home } from './pages';

const App = () => (
  <>
    <Header>
      <H1Text>Guess The Password!</H1Text>
    </Header>
    <Home />
  </>
);

export default App;
