/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { BorderBox, H2Text, P1Text } from '../../../components';
import { colors } from '../../../themes';

const AnswerBox = ({ tryNumber, pastAnswer, highlight, correct }) => (
  <BorderBox>
    <Row>
      <TryTimes correct={correct}>{`# ${tryNumber}`}</TryTimes>
      {pastAnswer
        .split('')
        .map((item) =>
          highlight.includes(item) ? (
            <Green key={item}>{item}</Green>
          ) : (
            <Black key={item}>{item}</Black>
          )
        )}
    </Row>
  </BorderBox>
);
export default AnswerBox;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Green = styled(P1Text)`
  color: ${colors.green};
`;

const Black = styled(P1Text)`
  color: ${colors.black};
`;

const TryTimes = styled(H2Text)`
  color: ${(props) => (props.correct ? colors.green : colors.red)};
`;