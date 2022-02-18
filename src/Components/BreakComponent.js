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

export const BreakComponent = (props) => {
  const { isPlaying, setIsPlaying, breakLength, setBreakLength } = props;
  const breakIncrement = () => {
    if (!isPlaying) {
      if (breakLength < 60 * secondsInMinute) {
        setBreakLength(breakLength + secondsInMinute);
      }
    }
  };
  const breakDecrement = () => {
    if (!isPlaying) {
      if (breakLength > 60) {
        setBreakLength(breakLength - secondsInMinute);
      }
    }
  };
  return (
    <div>
      <h1> Break Length </h1>
      <UpArrow id="increment" onClick={breakIncrement}></UpArrow>
      <LengthDisplay id="break-display">
        {breakLength / secondsInMinute}
      </LengthDisplay>
      <DownArrow id="decrement" onClick={breakDecrement}></DownArrow>
    </div>
  );
};
