import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const VideoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Head = styled.h1`
  color: #0b0757;
  font-weight: bold;
  font-size: 40px;

  @media (max-width: 768px) {
    font-size: 25px;
    padding-left: 15px;
  }
`;

const VideoWrapper = styled.div`
  flex: 1 1 30%;
  margin: 10px;
  max-width: 30%;

  @media (max-width: 768px) {
    flex: 1 1 100%;
    max-width: 100%;
    margin: 30px;
  }
`;

const StyledReactPlayer = styled(ReactPlayer)`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
  overflow: hidden;

  & > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const HighlightsYoutubeVideos = () => {
  return (
    <>
      <Head>Highlights And Youtube Videos</Head>
      <VideoContainer>
        <VideoWrapper>
          <StyledReactPlayer
            url="https://youtu.be/n6ecdYd8T6o?si=1yEHrzS-pyJ5qm9x"
            width="98%"
            height="30%"
          />
        </VideoWrapper>
        <VideoWrapper>
          <StyledReactPlayer
            url="https://youtu.be/n6ecdYd8T6o?si=1yEHrzS-pyJ5qm9x"
            width="98%"
            height="30%"
          />
        </VideoWrapper>
        <VideoWrapper>
          <StyledReactPlayer
            url="https://youtu.be/n6ecdYd8T6o?si=1yEHrzS-pyJ5qm9x"
            width="98%"
            height="30%"
          />
        </VideoWrapper>
      </VideoContainer>
    </>
  );
};

export default HighlightsYoutubeVideos;
