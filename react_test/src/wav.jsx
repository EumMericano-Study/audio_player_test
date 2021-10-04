import React from "react";
import styled from "styled-components";

import audio from "./assets/test.wav";

function Wav() {
  return (
    <Container>
      <div>Wav</div>
      <audio controls src={audio}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </Container>
  );
}

export default Wav;

const Container = styled.div`
  border: 3px solid red;
`;
