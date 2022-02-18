import { useState } from "react";
import styled from "styled-components";

const secondsInMinute = 60;

const ButtonStyle = styled.div`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
`;

const UpArrow = styled(ButtonStyle)`
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
`;

const DownArrow = styled(ButtonStyle)`
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;

const LengthDisplay = styled.div`
  font-size: 25px;
`;

export const SessionComponent = (props) => {
  const { isPlaying, setIsPlaying, sessionLength, setSessionLength } = props;
  const sessionIncrement = () => {
    if (!isPlaying) {
      if (sessionLength < 60 * secondsInMinute) {
        setSessionLength(sessionLength + secondsInMinute);
      }
    }
  };
  const sessionDecrement = () => {
    if (!isPlaying) {
      if (sessionLength > 60) {
        setSessionLength(sessionLength - secondsInMinute);
        console.log(sessionLength);
      }
    }
  };
  return (
    <div>
      <h1> Session Length </h1>
      <UpArrow id="increment" onClick={sessionIncrement}></UpArrow>
      <LengthDisplay id="session-length">
        {sessionLength / secondsInMinute}
      </LengthDisplay>
      <DownArrow id="decrement" onClick={sessionDecrement}></DownArrow>
    </div>
  );
};
