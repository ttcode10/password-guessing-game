import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Button, Input, H2Text, P1Text } from '../../components';
import { AnswerBox } from './components';
import { colors } from '../../themes';
import { formatNumber } from '../../utils';
import { getHint, verifyAnswer } from '../../apis';

const Home = () => {
  const [input, setInput] = useState('');
  const [hintText, setHintText] = useState('');
  const [userAttempt, setUserAttempt] = useState([]);

  const handleChange = (e) => {
    const formattedInput = formatNumber(e.target.value);
    setInput(formattedInput);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setInput('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await verifyAnswer(hintText, input);
      const { correct, highlight, answer } = response;
      setUserAttempt([...userAttempt, { answer, highlight, correct }]);
    } catch (error) {
      console.log(error);
    }
    setInput('');
  };

  const onKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  const getHintTextOnPageInit = async () => {
    try {
      const response = await getHint();
      const { hint } = response;
      setHintText(hint);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHintTextOnPageInit();
  }, []);

  return (
    <>
      <Container>
        <Upper>
          <Input
            name="password"
            placeholder="Type UNIQUE DIGIT and press ENTER..."
            type="text"
            pattern="^[0-9]*$"
            value={input}
            onChange={handleChange}
            onKeyUp={onKeyUp}
          />
          <Row>
            <H2Text>Hint</H2Text>
            <P1Text loose>{hintText}</P1Text>
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
          {userAttempt &&
            userAttempt.map((item) => (
              <AnswerBox
                key={item.answer}
                tryNumber={userAttempt.indexOf(item) + 1}
                pastAnswer={item.answer}
                highlight={item.highlight}
                correct={item.correct}
              />
            ))}
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
