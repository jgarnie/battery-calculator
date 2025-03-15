import styled from 'styled-components';

export const SnowFlakeIcon = ({ size }: { size: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m10 20-1.25-2.5L6 18" fill="#88C9F9" />
      <path d="M10 4 8.75 6.5 6 6" fill="#88C9F9" />
      <path d="m14 20 1.25-2.5L18 18" fill="#88C9F9" />
      <path d="m14 4 1.25 2.5L18 6" fill="#88C9F9" />
      <path d="m17 21-3-6h-4" fill="#88C9F9" />
      <path d="m17 3-3 6 1.5 3" fill="#88C9F9" />
      <path d="M2 12h6.5L10 9" fill="#88C9F9" />
      <path d="m20 10-1.5 2 1.5 2" fill="#88C9F9" />
      <path d="M22 12h-6.5L14 15" fill="#88C9F9" />
      <path d="m4 10 1.5 2L4 14" fill="#88C9F9" />
      <path d="m7 21 3-6-1.5-3" fill="#88C9F9" />
      <path d="m7 3 3 6h4" fill="#88C9F9" />
    </svg>
  );
};
const StyledLeave = styled.svg<{ degree: string; animationDuration: number }>`
  animation: rotateLeave ${({ animationDuration }) => animationDuration}s linear infinite;
  position: absolute;
  top: -10px;
  @keyframes rotateLeave {
    0% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(${({ degree }) => degree});
    }
  }
`;
export const LeaveIcon = ({ size }: { size: number }) => {
  const leaveAngle = Math.floor(Math.random() * 91);
  const degree = Math.random() > 0.5 ? leaveAngle + 'deg' : -leaveAngle + 'deg';
  console.log({ degree });

  return (
    <StyledLeave
      animationDuration={Math.random() * 10}
      degree={degree}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="#cf5504"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </StyledLeave>
  );
};

const StyledSunIcon = styled.svg`
  animation: sun 1s linear forwards infinite;
  position: absolute;
  top: -24px;
  @keyframes sun {
    0% {
      transform: translateY(10%);
    }
    25% {
      transform: translateY(25%);
    }
    50% {
      transform: translateY(50%);
    }
    75% {
      transform: translateY(75%);
    }
    100% {
      transform: translateY(100%);
    }
  }
`;
export const SunIcon = () => {
  return (
    <StyledSunIcon
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" fill="#FFE477" />
      <path d="M12 2v2" fill="#FFE477" />
      <path d="M12 20v2" fill="#FFE477" />
      <path d="m4.93 4.93 1.41 1.41" fill="#FFE477" />
      <path d="m17.66 17.66 1.41 1.41" fill="#FFE477" />
      <path d="M2 12h2" fill="#FFE477" />
      <path d="M20 12h2" fill="#FFE477" />
      <path d="m6.34 17.66-1.41 1.41" fill="#FFE477" />
      <path d="m19.07 4.93-1.41 1.41" fill="#FFE477" />
    </StyledSunIcon>
  );
};
