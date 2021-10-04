import React from "react";
import styled from "styled-components";
import "./app.css";

import Wav from "./wav";

function App() {
  return (
    <Container>
      <Wav />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
