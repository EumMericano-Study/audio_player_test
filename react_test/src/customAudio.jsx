import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

function CustomAudio() {
  const [isLoading, setLoading] = useState(true);
  const audio = useRef < HTMLAudioElement > null;

  useEffect(() => {
    const onLoadAudio = import("/assets/BaekYerin_Sometimes.mp3");
    onLoadAudio.addEventListener("load", () => {
      console.log("audio rendered");
      audio.current = onLoadAudio;
      setLoading(false);
    });

    return () => onLoadAudio.remove();
  });

  return <Container>{isLoading && <audio />}</Container>;
}

export default CustomAudio;

const Container = styled.div`
  border: 3px solid blue;
`;
