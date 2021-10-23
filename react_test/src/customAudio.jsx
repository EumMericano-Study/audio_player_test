import React, { useState, useEffect } from "react";
import styled from "styled-components";

import audio1 from "./assets/BaekYerin_Sometime.mp3";

function CustomAudio() {
  const [audioSrc] = useState(new Audio(audio1));
  const [isLoading, setLoading] = useState(true);

  const [isPlay, setIsPlay] = useState(
    audioSrc.paused && audioSrc.currentTime > 0 && !audioSrc.ended
  );
  useEffect(() => {
    audioSrc.addEventListener("loadeddata", () => {
      setLoading(false);
    });
  });

  function play() {
    if (!isPlay) {
      audioSrc.play();
      setIsPlay(true);
      return;
    }
    audioSrc.pause();
    setIsPlay(false);
  }

  return (
    <Container>
      {!isLoading && (
        <>
          <audio src={audio1} />
          <button onClick={play}>재생</button>
        </>
      )}
    </Container>
  );
}

export default CustomAudio;

const Container = styled.div`
  border: 3px solid blue;
`;
