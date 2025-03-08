import React from 'react';

export const Label = ({ label }: { label: string }) => {
  return (
    <h4 className="text-[10px]  landscape:text-[10px]  md:landscape:text-2xl  ">
      {label}
    </h4>
  );
};
