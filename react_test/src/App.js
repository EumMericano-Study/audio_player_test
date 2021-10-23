import React from "react";
import styled from "styled-components";
import "./app.css";

import Wav from "./wav";
import CustomAudio from "./customAudio";

function App() {
  return (
    <Container>
      <Wav />
      <CustomAudio />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
