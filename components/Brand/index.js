import React from "react";
import styled, { keyframes, css } from "styled-components";
import { Brandimg } from "../constants";
import Image from "next/image";

function Brand() {

  return (
    <AppContainer>
      <Wrapper>
        <Marquee>
          <MarqueeGroup >
            {Brandimg.map((array , index) => (
              <ImageGroup key={index}>
                <Image src={array.image} alt={array.image} height={150} width={150}/>
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {Brandimg.map((array , index) => (
              <ImageGroup key={index}>
                <Image  src={array.image} alt={array.image} height={150} width={150} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

export default Brand;

const AppContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;



const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  display: flex;
  align-items: center;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;


const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
`;

