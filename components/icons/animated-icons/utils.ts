import styled from 'styled-components';

export const StyledSummerWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  animation: light 1s linear forwards;
  animation-delay: 1s;
  @keyframes light {
    0% {
      background: transparent;
    }
    25% {
      background: linear-gradient(to right bottom, #ffae00 0%, transparent 30%);
    }
    50% {
      background: linear-gradient(to right bottom, #ffae00 0%, transparent 50%);
    }
    75% {
      background: linear-gradient(to right bottom, #ffae00 0%, transparent 60%);
    }
    100% {
      background: linear-gradient(to right bottom, #ffae00 0%, transparent 70%);
    }
  }
`;

export const StyledWrap = styled.div<{ left: number; delay: number }>`
  height: 125%;
  width: 100%;
  top: -10px;
  left: ${({ left }) => left}%;
  position: absolute;
  animation: snowFlake 4s infinite;
  animation-timing-function: linear;
  animation-delay: ${({ delay }) => delay}s;
  @keyframes snowFlake {
    0% {
      transform: translate(0%, 0%);

      opacity: 0;
    }
    1% {
      transform: translate(0%, 2%);
      opacity: 0.5;
    }
    5% {
      transform: translate(1%, 5%);
      opacity: 1;
    }
    10% {
      transform: translate(2%, 10%);
    }
    25% {
      transform: translate(0%, 25%);
    }
    50% {
      transform: translate(-3%, 50%);
    }
    60% {
      transform: translate(0%, 60%);
    }
    75% {
      transform: translate(2%, 75%);
    }
    85% {
      transform: translate(0%, 85%);
    }
    100% {
      transform: translate(-1%, 100%);
    }
  }
`;
