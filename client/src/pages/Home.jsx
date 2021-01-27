import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { BorderBox, Button, Input, H2Text, P1Text } from '../components';
import { colors } from '../themes';
import { formatNumber } from '../utils';

const Home = () => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    const formattedInput = formatNumber(e.target.value);
    setInput(formattedInput);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  return (
    <>
      <Container>
        <Upper>
          <Input
            name="password"
            placeholder="Type here..."
            type="text"
            pattern="^[0-9]*$"
            value={input}
            onChange={handleChange}
            onKeyUp={onKeyUp}
          />
          <Row>
            <H2Text>Hint</H2Text>
            <P1Text loose>12345678</P1Text>
          </Row>
          <Row>
            <Button onClick={handleClear}>Clear</Button>
            <Button primary onClick={handleSubmit}>
              Submit
            </Button>
          </Row>
        </Upper>
        <Section>
          <H2Text>User Attempts:</H2Text>
          <BorderBox>
            <Row>
              <H2Text>#2</H2Text>
              <P1Text loose>2342343</P1Text>
            </Row>
          </BorderBox>
          <BorderBox>
            <Row>
              <H2Text>#1</H2Text>
              <P1Text loose>2342343</P1Text>
            </Row>
          </BorderBox>
        </Section>
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > * {
    margin-bottom: 0.75rem;
    width: 320px;
  }
`;

const Upper = styled(Section)`
  background: ${colors.background};
  height: 30vh;
  width: 100vw;
`;
