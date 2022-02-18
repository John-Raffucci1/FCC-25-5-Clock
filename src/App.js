import "./App.css";
import styled from "styled-components";
import { useState } from "react";
import { BreakComponent } from "./Components/BreakComponent";
import { SessionComponent } from "./Components/SessionComponent";
import { ClockComponent } from "./Components/ClockComponent";

let AppDiv = styled.div`
  height: 100vh;
  background-color: lightblue;
  align-items: center;
  justify-content: center;
  display: flex;
  text-align: center;
  flex-direction: column;
`;
let LengthDiv = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: row;
  gap: 30px;
`;

let DisplayDiv = styled.div`
  font-size: 45px;
  font-weight: bold;
`;

const minute = 60;

function App() {
  const [breakLength, setBreakLength] = useState(5 * minute);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sessionLength, setSessionLength] = useState(25 * minute);
  return (
    <AppDiv className="App">
      <DisplayDiv>25 + 5 Clock</DisplayDiv>
      <LengthDiv>
        <BreakComponent
          breakLength={breakLength}
          setBreakLength={setBreakLength}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
        <SessionComponent
          sessionLength={sessionLength}
          isPlaying={isPlaying}
          setSessionLength={setSessionLength}
          setIsPlaying={setIsPlaying}
        />
      </LengthDiv>
      <ClockComponent
        sessionLength={sessionLength}
        setSessionLength={setSessionLength}
        breakLength={breakLength}
        setBreakLength={setBreakLength}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </AppDiv>
  );
}

export default App;
