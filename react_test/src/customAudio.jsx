import React, { useState, useEffect } from "react";
import styled from "styled-components";

import audio1 from "./assets/BaekYerin_Sometime.mp3";

function CustomAudio() {
  const [audioSrc] = useState(new Audio(audio1));
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    audioSrc.addEventListener("loadeddata", () => {
      setLoading(false);
    });
  });

  return <Container>{!isLoading && <audio src={audio1} controls />}</Container>;
}

export default CustomAudio;

const Container = styled.div`
  border: 3px solid blue;
`;
