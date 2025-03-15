import React from 'react';

const Battery = ({ lines, iconSize }: { lines: number; iconSize: number }) => {
  let x1 = 2;
  let x2 = 2;

  return (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="10" x="2" y="7" rx="2" ry="2" />
      {Array.from({ length: Math.ceil(lines) }, (_, index) => {
        x1 += 4;
        x2 += 4;
        return <line key={index} x1={x1} x2={x2} y1="11" y2="13" />;
      })}
    </svg>
  );
};

export default Battery;
