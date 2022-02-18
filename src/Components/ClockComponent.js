import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { SessionComponent } from "./SessionComponent";

const secondsInMinute = 60;

const ClockStyle = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 160px;
  width: 270px;
  border: solid 5px black;
  border-radius: 60px;
`;

const SessionStyle = styled.div`
  font-size: 35px;
`;

const ClockNumberStyle = styled.div`
  font-size: 77px;
`;

const ButtonStyle = styled.button`
  background-color: #317fd4;
  color: white;
  padding: 10px 40px;
  border: none;
  border-radius: 5px;
  margin: 5px;
`;

export const ClockComponent = (props) => {
  const {
    isPlaying,
    setIsPlaying,
    sessionLength,
    setSessionLength,
    breakLength,
    setBreakLength,
  } = props;
  let [clockTimer, setClockTimer] = useState(sessionLength);
  const [clockTimeOut, setClockTimeOut] = useState("");
  const [isSession, setIsSession] = useState(true);
  let clockTimerRef = useRef(clockTimer);
  clockTimerRef.current = clockTimer;
  const resetClock = () => {
    setSessionLength(25 * secondsInMinute);
    setBreakLength(5 * secondsInMinute);
    setClockTimer(25 * secondsInMinute);
    setIsPlaying(false);
  };
  const clockCountDown = () => {
    console.log(clockTimerRef.current);
    setClockTimer(clockTimerRef.current - 1);
  };
  useEffect(() => {
    if (isPlaying) {
      const intervalID = setInterval(clockCountDown, 1000);
      setClockTimeOut(intervalID);
    }
    if (!isPlaying) {
      clearInterval(clockTimeOut);
    }
  }, [isPlaying]);
  useEffect(() => {
    if (clockTimer === 0) {
      if (isSession) {
        setClockTimer(breakLength);
      } else {
        setClockTimer(sessionLength);
      }
      const alarm = new Audio(
        "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      );
      alarm.play();
      setIsSession(!isSession);
    }
  }, [clockTimer]);
  useEffect(() => {
    if (isSession) {
      setClockTimer(sessionLength);
    }
  }, [sessionLength]);
  useEffect(() => {
    if (!isSession) {
      setClockTimer(breakLength);
    }
  }, [breakLength]);
  return (
    <div>
      <ClockStyle>
        <SessionStyle>{isSession ? "Session" : "Break"}</SessionStyle>
        <ClockNumberStyle id="clock">
          {Math.floor(clockTimer / secondsInMinute)}:
          {clockTimer % secondsInMinute < 10 && "0"}
          {clockTimer % secondsInMinute}
        </ClockNumberStyle>
      </ClockStyle>
      <ButtonStyle id="play-pause" onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </ButtonStyle>
      <ButtonStyle id="reset" onClick={resetClock}>
        Reset
      </ButtonStyle>
    </div>
  );
};
